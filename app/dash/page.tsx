"use client"
import { Bot, Wallet, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  // Sample portfolio data
  const portfolioData = {
    totalBalance: 24680.45,
    change: 3.2,
    assets: [
      { name: "Bitcoin", symbol: "BTC", amount: 0.42, value: 12600, change: 2.4 },
      { name: "Ethereum", symbol: "ETH", amount: 3.8, value: 7200, change: -1.2 },
      { name: "Solana", symbol: "SOL", amount: 48, value: 4880, change: 8.7 },
    ],
  }

  // Sample bots data
  const botsData = [
    {
      id: 1,
      name: "Alpha Trader",
      asset: "BTC/USDT",
      status: "active",
      profit: 320.45,
      profitPercentage: 12.8,
      trades: 28,
      winRate: 68,
    },
    {
      id: 2,
      name: "ETH Momentum",
      asset: "ETH/USDT",
      status: "active",
      profit: -45.2,
      profitPercentage: -2.1,
      trades: 15,
      winRate: 53,
    },
  ]

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">NeuroTrade</h1>

      <Tabs defaultValue="portfolio">
        <TabsList className="mb-4">
          <TabsTrigger value="portfolio">
            <Wallet className="h-4 w-4 mr-2" />
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="bots">
            <Bot className="h-4 w-4 mr-2" />
            Bots
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${portfolioData.totalBalance.toLocaleString()}</p>
                <p className={`text-sm ${portfolioData.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {portfolioData.change >= 0 ? "↑" : "↓"} {Math.abs(portfolioData.change)}% (24h)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle> Assets</CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-gray-500">
                        {asset.amount} {asset.symbol}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${asset.value.toLocaleString()}</p>
                      <p className={`text-sm ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {asset.change >= 0 ? "↑" : "↓"} {Math.abs(asset.change)}%
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bots">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Bots</CardTitle>
              </CardHeader>
              <CardContent>
                {botsData.map((bot) => (
                  <div key={bot.id} className="mb-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{bot.name}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${bot.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {bot.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{bot.asset}</p>
                    <div className="flex justify-between text-sm">
                      <span>
                        Profit: ${bot.profit.toFixed(2)} ({bot.profitPercentage}%)
                      </span>
                      <span>Trades: {bot.trades}</span>
                      <span>Win Rate: {bot.winRate}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Button>Create New Bot</Button>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your account settings here.</p>
              {/* Add settings form or options here */}
              <Button className="mt-4">Update Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

