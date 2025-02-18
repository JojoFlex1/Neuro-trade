import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, BarChart, Wallet, ZapIcon, ShieldIcon, BotIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2" />
          <span className="font-bold">NeuroTrade</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#bots">
            Bots
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#cta">
            Get Started
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your Trading
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Automated bots designed to maximize your profits in the trading ecosystem. Trade smarter, faster, and
                  more efficiently.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Connect Wallet <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose NeuroTrade
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <ZapIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Execute trades at incredible speeds, taking advantage of market opportunities in milliseconds.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <ShieldIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure & Reliable</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Built with top-notch security measures to keep your assets safe while trading 24/7.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <BotIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Algorithms</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage sophisticated trading strategies optimized for the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Trading?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of traders already benefiting from our advanced bots. Start your journey to
                  smarter trading today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Connect Wallet Now</Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card required. Start with a free trial.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="bots" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Trading Bots</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[ 
                {
                  icon: Cpu,
                  name: "TradeMaster Pro",
                  description: "Advanced algorithmic trading for experienced users",
                },
                {
                  icon: BarChart,
                  name: "MarketSense AI",
                  description: "AI-powered market analysis and trade execution",
                },
                {
                  icon: Wallet,
                  name: "YieldHarvester",
                  description: "Optimize your DeFi yields across various protocols",
                },
                { icon: ZapIcon, name: "FlashArb", description: "Lightning-fast arbitrage bot for maximum profits" },
                {
                  icon: ShieldIcon,
                  name: "GuardianBot",
                  description: "Secure your assets with automated risk management",
                },
                { icon: BotIcon, name: "SolSniper", description: "Snipe the best deals on NFT marketplaces" },
              ].map((bot, index) => (
                <Card key={index}>
                  <CardHeader>
                    <bot.icon className="w-10 h-10 mb-2 text-primary" />
                    <CardTitle>{bot.name}</CardTitle>
                    <CardDescription>{bot.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 NeuroTrade. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

