// // app/page.tsx
// import DashboardCard from '@/components/DashboardCard'
// import LearnMoreButton from '@/components/LearnMoreButton'
// import { BarChart2, PlusCircle, Settings, Twitter, Facebook, Instagram } from 'lucide-react'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-beige-100 text-neutral-800 font-sans">
//       <header className="bg-beige-200 py-6 px-8 mb-12">
//         <h1 className="text-4xl font-bold text-center text-neutral-800">NeuroTrade</h1>
//       </header>

//       <main className="max-w-6xl mx-auto px-8">
//         <section className="text-center mb-24">
//           <h2 className="text-3xl font-light mb-6 text-neutral-700">
//             Crafted for the modern connoisseur of automated trading—where sophistication meets strategy.
//           </h2>
//           <LearnMoreButton />
//         </section>

//         <section className="mb-24">
//           <h2 className="text-2xl font-semibold mb-8 text-center text-neutral-700">Our Platform</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <DashboardCard title="Account Summary" icon={<BarChart2 className="w-5 h-5" />}>
//               <p>Total P/L: $10,245</p>
//               <p>Active Bots: 3</p>
//               <p>Total Trades: 156</p>
//             </DashboardCard>
//             <DashboardCard title="Bot Activity" icon={<PlusCircle className="w-5 h-5" />}>
//               <p>Top Bot: AlphaTrader</p>
//               <p>24h Performance: +2.3%</p>
//             </DashboardCard>
//             <DashboardCard title="Quick Actions" icon={<Settings className="w-5 h-5" />}>
//               <Link href="/-bot" className="block w-full text-left py-2 hover:text-neutral-600">Create New Bot</Link>
//               <Link href="/my-bots" className="block w-full text-left py-2 hover:text-neutral-600">Manage Existing Bots</Link>
//               <Link href="/trade-history" className="block w-full text-left py-2 hover:text-neutral-600">View Trade History</Link>
//             </DashboardCard>
//           </div>
//         </section>

//         <section className="mb-24">
//           <h2 className="text-2xl font-semibold mb-8 text-center text-neutral-700">Why Choose NeuroTrade?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-beige-200 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4 text-neutral-700">Advanced AI Algorithms</h3>
//               <p className="text-neutral-600">Our cutting-edge AI algorithms analyze market trends and execute trades with precision, maximizing your potential for profit.</p>
//             </div>
//             <div className="bg-beige-200 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4 text-neutral-700">User-Friendly Interface</h3>
//               <p className="text-neutral-600">Navigate our platform with ease. NeuroTrade combines powerful features with intuitive design for a seamless trading experience.</p>
//             </div>
//           </div>
//         </section>

//         <section className="text-center mb-24">
//           <Link 
//             href="/createbot"
//             className="inline-block bg-neutral-800 text-white px-8 py-3 rounded-md hover:bg-neutral-700 transition-colors text-lg font-semibold"
//           >
//             Get Started
//           </Link>
//         </section>
//       </main>

//       <footer className="bg-beige-200 py-12 px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-neutral-700">Support</h3>
//             <ul className="space-y-2 text-neutral-600">
//               <li><Link href="/faq">FAQ</Link></li>
//               <li><Link href="/contact">Contact Us</Link></li>
//               <li><Link href="/help">Help Center</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-neutral-700">Legal</h3>
//             <ul className="space-y-2 text-neutral-600">
//               <li><Link href="/terms">Terms and Conditions</Link></li>
//               <li><Link href="/privacy">Privacy Policy</Link></li>
//               <li><Link href="/disclaimer">Risk Disclaimer</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-neutral-700">Connect</h3>
//             <div className="flex space-x-4">
//               <Link href="#" className="text-neutral-600 hover:text-neutral-800"><Twitter className="w-6 h-6" /></Link>
//               <Link href="#" className="text-neutral-600 hover:text-neutral-800"><Facebook className="w-6 h-6" /></Link>
//               <Link href="#" className="text-neutral-600 hover:text-neutral-800"><Instagram className="w-6 h-6" /></Link>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-neutral-600">
//           <p>&copy; 2023 NeuroTrade. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }
