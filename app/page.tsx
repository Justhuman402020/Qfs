'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            QFS Blockchain
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
          </nav>
          <div className="flex gap-4">
            <Link href="/login" className="px-6 py-2 text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400/10 transition">
              Login
            </Link>
            <Link href="/register" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">QFS Blockchain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of decentralized finance. Secure, fast, and transparent blockchain solutions for everyone.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition">
                Get Started
              </Link>
              <button className="px-8 py-3 text-white border border-purple-400 rounded-lg hover:bg-purple-400/10 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-25 blur-3xl"></div>
            <div className="relative bg-slate-800/50 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-3 bg-purple-500 rounded-full w-3/4"></div>
                <div className="h-3 bg-pink-500 rounded-full w-1/2"></div>
                <div className="h-3 bg-purple-500 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Secure Transactions', desc: 'Military-grade encryption for all transactions' },
            { title: 'Fast Processing', desc: 'Lightning-fast blockchain confirmation' },
            { title: 'Global Access', desc: 'Access from anywhere in the world' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-8 hover:border-purple-500/60 transition">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-purple-400 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500">
            <p>&copy; 2024 QFS Blockchain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
