"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUp,
  Clock,
  Download,
  LineChart,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Upload,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function PortfolioPage() {
  const [walletAddress, setWalletAddress] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Mock data for the portfolio
  const walletBalance = {
    total: 2458.65,
    change: 124.35,
    changePercent: 5.32,
    isPositive: true,
  }

  const activeBots = [
    {
      id: 1,
      name: "BTC Short Term",
      pair: "BTC-USDT",
      profit: 87.23,
      profitPercent: 8.72,
      isPositive: true,
      status: "Running",
      lastTrade: "2 hours ago",
    },
    {
      id: 2,
      name: "ETH Long Term",
      pair: "ETH-USDT",
      profit: 45.12,
      profitPercent: 4.51,
      isPositive: true,
      status: "Running",
      lastTrade: "5 hours ago",
    },
    {
      id: 3,
      name: "SOL Custom",
      pair: "SOL-USDT",
      profit: -12.34,
      profitPercent: -1.23,
      isPositive: false,
      status: "Running",
      lastTrade: "1 hour ago",
    },
  ]

  const profitLoss = {
    totalProfit: 132.35,
    totalLoss: -12.34,
    netProfit: 120.01,
    netProfitPercent: 4.88,
    isPositive: true,
  }

  const recentTrades = [
    {
      id: 1,
      botName: "BTC Short Term",
      pair: "BTC-USDT",
      type: "Buy",
      amount: 0.0045,
      price: 42350.25,
      total: 190.58,
      time: "2 hours ago",
    },
    {
      id: 2,
      botName: "SOL Custom",
      pair: "SOL-USDT",
      type: "Sell",
      amount: 2.5,
      price: 103.45,
      total: 258.63,
      time: "3 hours ago",
    },
    {
      id: 3,
      botName: "ETH Long Term",
      pair: "ETH-USDT",
      type: "Buy",
      amount: 0.12,
      price: 2245.78,
      total: 269.49,
      time: "5 hours ago",
    },
    {
      id: 4,
      botName: "BTC Short Term",
      pair: "BTC-USDT",
      type: "Sell",
      amount: 0.0042,
      price: 42780.15,
      total: 179.68,
      time: "8 hours ago",
    },
  ]

  // Format wallet address for display
const formatAddress = (address: string): string => {
  if (!address) return "";
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};


  // Format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

  // Handle refresh
  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Wallet className="h-4 w-4 mr-2" />
            <span>{formatAddress(walletAddress)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Create Bot
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Bot</DialogTitle>
                <DialogDescription>Choose a strategy to create a new trading bot.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button asChild className="w-full justify-start">
                  <Link href="/createbot">Short Term Strategy</Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href="/createbot">Long Term Strategy</Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href="/createbot">Custom Strategy</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Wallet Balance Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <div className="text-3xl font-bold">{formatCurrency(walletBalance.total)}</div>
              <div className={`flex items-center mt-2 ${walletBalance.isPositive ? "text-green-500" : "text-red-500"}`}>
                {walletBalance.isPositive ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span>
                  {formatCurrency(walletBalance.change)} ({walletBalance.changePercent}%)
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex gap-2 w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Deposit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Deposit Funds</DialogTitle>
                    <DialogDescription>Add funds to your trading wallet.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="amount" className="text-sm font-medium">
                        Amount (USD)
                      </label>
                      <Input id="amount" placeholder="Enter amount" type="number" min="1" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Deposit Funds</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" />
                    Withdraw
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Withdraw Funds</DialogTitle>
                    <DialogDescription>Withdraw funds from your trading wallet.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="withdraw-amount" className="text-sm font-medium">
                        Amount (USD)
                      </label>
                      <Input
                        id="withdraw-amount"
                        placeholder="Enter amount"
                        type="number"
                        min="1"
                        max={walletBalance.total}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Available balance: {formatCurrency(walletBalance.total)}
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Withdraw Funds</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardFooter>
        </Card>

        {/* Profit & Loss Summary Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Profit & Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <div className={`text-3xl font-bold ${profitLoss.isPositive ? "text-green-500" : "text-red-500"}`}>
                {formatCurrency(profitLoss.netProfit)}
              </div>
              <div className={`flex items-center mt-2 ${profitLoss.isPositive ? "text-green-500" : "text-red-500"}`}>
                {profitLoss.isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                <span>{profitLoss.netProfitPercent}% overall</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Total Profit</div>
                <div className="text-green-500">{formatCurrency(profitLoss.totalProfit)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Loss</div>
                <div className="text-red-500">{formatCurrency(profitLoss.totalLoss)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Bots Summary Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Active Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <div className="text-3xl font-bold">{activeBots.length}</div>
              <div className="text-sm text-muted-foreground mt-2">Trading bots currently active</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm text-muted-foreground">Profitable</div>
                <div className="text-green-500">{activeBots.filter((bot) => bot.isPositive).length}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Losing</div>
                <div className="text-red-500">{activeBots.filter((bot) => !bot.isPositive).length}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Bots Table */}
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Bots</CardTitle>
            <CardDescription>Your currently running trading bots and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Bot Name</th>
                    <th className="text-left py-3 px-4 font-medium">Trading Pair</th>
                    <th className="text-left py-3 px-4 font-medium">Profit/Loss</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Last Trade</th>
                    <th className="text-left py-3 px-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {activeBots.map((bot) => (
                    <tr key={bot.id} className="border-b">
                      <td className="py-3 px-4">{bot.name}</td>
                      <td className="py-3 px-4">{bot.pair}</td>
                      <td className={`py-3 px-4 ${bot.isPositive ? "text-green-500" : "text-red-500"}`}>
                        <div className="flex items-center">
                          {bot.isPositive ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          {formatCurrency(bot.profit)} ({bot.profitPercent}%)
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          {bot.status}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {bot.lastTrade}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trades Table */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
            <CardDescription>The most recent trades executed by your bots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Bot</th>
                    <th className="text-left py-3 px-4 font-medium">Pair</th>
                    <th className="text-left py-3 px-4 font-medium">Type</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Price</th>
                    <th className="text-left py-3 px-4 font-medium">Total</th>
                    <th className="text-left py-3 px-4 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade) => (
                    <tr key={trade.id} className="border-b">
                      <td className="py-3 px-4">{trade.botName}</td>
                      <td className="py-3 px-4">{trade.pair}</td>
                      <td className={`py-3 px-4 ${trade.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                        {trade.type}
                      </td>
                      <td className="py-3 px-4">{trade.amount}</td>
                      <td className="py-3 px-4">{formatCurrency(trade.price)}</td>
                      <td className="py-3 px-4">{formatCurrency(trade.total)}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {trade.time}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <LineChart className="h-4 w-4 mr-2" />
              View All Trades
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

