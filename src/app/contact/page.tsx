export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-10">
      
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Contact & Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* GitHub Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="text-4xl mb-4">💻</div>
          <h2 className="text-xl font-semibold">GitHub</h2>

          {/* Name clickable */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-purple-600 font-semibold block mt-1 hover:underline"
          >
            Ali Hasnain
          </a>

          <p className="text-gray-600 mt-3 mb-4">
            My code & open source projects
          </p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            Open GitHub →
          </a>
        </div>

        {/* Vercel Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-xl font-semibold">Vercel</h2>

          {/* Name clickable */}
          <a
            href="https://yourproject.vercel.app"
            target="_blank"
            className="text-purple-600 font-semibold block mt-1 hover:underline"
          >
            Ali Hasnain
          </a>

          <p className="text-gray-600 mt-3 mb-4">
            My live deployed projects
          </p>

          <a
            href="https://yourproject.vercel.app"
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            Open Vercel →
          </a>
        </div>

      </div>
    </main>
  );
}
