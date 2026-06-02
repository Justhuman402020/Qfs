'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login attempt:', { email, password });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            QFS Blockchain
          </Link>
          <Link href="/register" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
            Register
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">Log In</h1>
            <p className="text-gray-400 text-center mb-8">Access your QFS Blockchain account</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-purple-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800/50 text-gray-400">or</span>
              </div>
            </div>

            <p className="text-center text-gray-400 mb-4">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium transition">
                Register here
              </Link>
            </p>

            <Link
              href="/"
              className="block text-center text-sm text-gray-500 hover:text-gray-400 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
