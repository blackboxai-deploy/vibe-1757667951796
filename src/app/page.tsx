export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your first Next.js application with modern styling and responsive design.
        </p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <p className="text-gray-700 text-lg">
            🎉 Your app is running successfully!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}