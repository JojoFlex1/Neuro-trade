"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wallet, AlertTriangle } from "lucide-react";
import { Contract } from "starknet";
import { connect } from "get-starknet";

export default function CreateBotPage() {
  const router = useRouter();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<any>("");
  const [selectedStrategy, setSelectedStrategy] = useState<any>("");
  const [depositMade, setDepositMade] = useState(false);
  const [showDepositAlert, setShowDepositAlert] = useState<any>(false);
  const [starknetProvider, setStarknetProvider] = useState<any>(null);
  const [starknetContract, setStarknetContract] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [botParams, setBotParams] = useState({
    botName: "",
    tradingPair: "",
    investmentAmount: 20,
    stopLoss: 5,
    takeProfit: 10,
  });

  // Connect wallet function
  const connectWallet = async () => {
    try {
      setIsLoading(true);

      // Connect to Starknet wallet
      const starknetProvider = await connect({
        modalMode: "alwaysAsk" // This will force the wallet selection modal to appear
      });

      if (!starknetProvider) {
        alert("Please install a Starknet wallet extension like ArgentX or Braavos");
        return;
      }

      // Get the wallet address
      const address = starknetProvider.selectedAddress;
      setWalletAddress(address!);
      setWalletConnected(true);
      setStarknetProvider(starknetProvider);

      // Load the contract
      const contract = await loadContract(starknetProvider);
      if (contract) {
        setStarknetContract(contract);
        console.log("Contract initialized successfully:", contract);
      }

      console.log("Starknet wallet connected:", address);

    } catch (error) {
      if (error.message && error.message.includes("wallet not installed")) {
        alert("Please install a Starknet wallet extension.");
      } else {
        alert("Failed to connect wallet. Please try again.");
      }
      console.error("Error connecting wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Define the loadContract function
  async function loadContract(provider) {
    try {
      // Your contract address
      const contractAddress = "0x48d1b3cb0245a1af7a90592324c9365b717c11859af2764c008f1b7c5d9b395";
      
      // Fetch the ABI from the public folder
      const response = await fetch('/fullabi.json');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ABI: ${response.statusText}`);
      }

      const contractAbi = await response.json();
      console.log("ABI loaded successfully");

      // Initialize your contract with the fetched ABI
      const contract = new Contract(contractAbi, contractAddress, provider);
      
      return contract;
    } catch (error) {
      console.error("Error loading contract ABI:", error);
      alert("Failed to load contract. Please refresh and try again.");
      return null;
    }
  }

  // Handle deposit using Starknet
  const handleDeposit = async () => {
    try {
      setIsLoading(true);
      if (!starknetContract) {
        alert("Starknet contract not initialized");
        return;
      }

      console.log("Starting deposit process...");
      
      // Convert the investment amount to the appropriate format
      const amountToDeposit = botParams.investmentAmount;
      console.log("Amount to deposit:", amountToDeposit);

      // Call your contract's deposit method
      const response = await starknetContract.invoke("deposit", [amountToDeposit]);
      console.log("Deposit transaction submitted:", response);

      // Wait for transaction confirmation
      await starknetProvider.waitForTransaction(response.transaction_hash);

      console.log("Deposit successful:", response.transaction_hash);
      setDepositMade(true);
      setShowDepositAlert(false);

    } catch (error) {
      console.error("Error making deposit:", error);
      alert("Failed to make deposit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Create bot function using Starknet contract
  const createBot = async () => {
    // Check if deposit has been made
    if (!depositMade) {
      setShowDepositAlert(true);
      return;
    }

    // Validate form data
    if (!botParams.botName || !botParams.tradingPair) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setIsLoading(true);
      if (!starknetContract) {
        alert("Starknet contract not initialized");
        return;
      }

      console.log("Creating bot with params:", botParams);

      // Prepare the parameters for your contract
      const params = [
        botParams.botName,
        botParams.tradingPair,
        botParams.investmentAmount,
        botParams.stopLoss,
        botParams.takeProfit
      ];

      // Call your contract's createBot method
      // Note: Make sure the method name matches exactly what's in your contract
      const response = await starknetContract.invoke("create_bot", params);
      console.log("Create bot transaction submitted:", response);

      // Wait for transaction confirmation
      await starknetProvider.waitForTransaction(response.transaction_hash);

      console.log("Bot created successfully:", response.transaction_hash);

      // Redirect to dashboard
      router.push("/dashboard");

    } catch (error) {
      console.error("Error creating bot:", error);
      alert("Failed to create bot: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Format wallet address for display
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="container max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your Trading Bot</h1>

      {/* Wallet Connection Section */}
      <div className="mb-8 flex flex-col items-center">
        {!walletConnected ? (
          <Button size="lg" onClick={connectWallet} className="w-full max-w-md" disabled={isLoading}>
            <Wallet className="mr-2 h-4 w-4" />
            {isLoading ? "Connecting..." : "Connect Wallet"}
          </Button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
              <Wallet className="h-4 w-4" />
              <span className="font-medium">{formatAddress(walletAddress)}</span>
            </div>
            <p className="text-sm text-muted-foreground">Wallet connected</p>
          </div>
        )}
      </div>

      {/* Strategy Selection */}
      <div className="mb-8">
        {walletConnected && !selectedStrategy && (
          <Button
            size="lg"
            className="w-full max-w-md mx-auto block mb-6"
            onClick={() => setSelectedStrategy("short")}
          >
            Create Bot
          </Button>
        )}

        {walletConnected && (
          <Tabs value={selectedStrategy} onValueChange={setSelectedStrategy} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="short">Short Term Strategy</TabsTrigger>
              <TabsTrigger value="long">Long Term Strategy</TabsTrigger>
              <TabsTrigger value="custom">Custom Strategy</TabsTrigger>
            </TabsList>

            {/* Short Term Strategy */}
            <TabsContent value="short">
              <StrategyForm
                title="Short Term Strategy"
                description="Focus on quick trades with high frequency"
                botParams={botParams}
                setBotParams={setBotParams}
                onSubmit={createBot}
                frequency="High"
                riskLevel="Medium to High"
                isLoading={isLoading}
              />
            </TabsContent>

            {/* Long Term Strategy */}
            <TabsContent value="long">
              <StrategyForm
                title="Long Term Strategy"
                description="Wider profit margins, lower frequency"
                botParams={botParams}
                setBotParams={setBotParams}
                onSubmit={createBot}
                frequency="Low"
                riskLevel="Low to Medium"
                isLoading={isLoading}
              />
            </TabsContent>

            {/* Custom Strategy */}
            <TabsContent value="custom">
              <StrategyForm
                title="Custom Strategy"
                description="Full flexibility for all settings"
                botParams={botParams}
                setBotParams={setBotParams}
                onSubmit={createBot}
                isCustom={true}
                isLoading={isLoading}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>

      {/* Deposit Alert */}
      {showDepositAlert && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Deposit Required</AlertTitle>
          <AlertDescription>
            Please deposit at least $20 to activate this bot.
            <Button variant="outline" className="mt-2" onClick={handleDeposit} disabled={isLoading}>
              {isLoading ? "Processing..." : "Deposit Now"}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Instructions for users who haven't connected wallet */}
      {!walletConnected && (
        <div className="text-center text-muted-foreground mt-8">
          <p>Please connect your wallet to create a trading bot.</p>
          <p className="mt-2">You'll need a Starknet wallet like ArgentX or Braavos.</p>
          <p className="mt-2">You'll need to deposit at least $20 before your bot can start trading.</p>
        </div>
      )}
    </div>
  );
}

// Strategy Form Component
function StrategyForm({
  title,
  description,
  botParams,
  setBotParams,
  onSubmit,
  frequency,
  riskLevel,
  isCustom = false,
  isLoading = false,
}: any) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBotParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setBotParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="botName">Bot Name</Label>
            <Input 
              id="botName" 
              name="botName" 
              value={botParams.botName} 
              onChange={handleChange} 
              placeholder="My Trading Bot" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tradingPair">Trading Pair</Label>
            <Select 
              value={botParams.tradingPair} 
              onValueChange={(value) => handleSelectChange("tradingPair", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select trading pair" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ETH/USDT">ETH/USDT</SelectItem>
                <SelectItem value="BTC/USDT">BTC/USDT</SelectItem>
                <SelectItem value="SOL/USDT">SOL/USDT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="investmentAmount">Investment Amount ($)</Label>
            <Input 
              id="investmentAmount" 
              name="investmentAmount" 
              type="number" 
              min={20} 
              value={botParams.investmentAmount} 
              onChange={handleChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stopLoss">Stop Loss (%)</Label>
            <Input 
              id="stopLoss" 
              name="stopLoss" 
              type="number" 
              min={1} 
              max={50} 
              value={botParams.stopLoss} 
              onChange={handleChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="takeProfit">Take Profit (%)</Label>
            <Input 
              id="takeProfit" 
              name="takeProfit" 
              type="number" 
              min={1} 
              max={100} 
              value={botParams.takeProfit} 
              onChange={handleChange} 
            />
          </div>
        </div>

        {!isCustom && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-muted p-4 rounded-md">
            <div>
              <p className="text-sm font-medium">Trading Frequency</p>
              <p className="text-sm text-muted-foreground">{frequency}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Risk Level</p>
              <p className="text-sm text-muted-foreground">{riskLevel}</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onSubmit} className="w-full" disabled={isLoading}>
          {isLoading ? "Processing..." : "Create Bot"}
        </Button>
      </CardFooter>
    </Card>
  );
}