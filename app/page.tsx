'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
          <p className="text-gray-600">Access your account or create a new one</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/login"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
          >
            Log In
          </Link>

          <Link
            href="/register"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Choose an option above to get started
        </p>
      </div>
    </main>
  );
}
