export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-8">

        {/* Personal Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            My Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            My name is <b>Ali Hasnain</b>. I am learning and working in the field of
            Artificial Intelligence and modern web development. I am passionate
            about building professional and creative web applications using
            Next.js and modern tools.
          </p>
        </section>

        {/* PAIB Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            PAIB Institute
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I am currently enrolled in <b>PAIB</b>, where I am learning
            Artificial Intelligence, Agentic AI, and modern technology skills.
            PAIB focuses on practical learning and prepares students for the
            future of AI and software development.
          </p>
        </section>

        {/* Contact Links */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            Contact Me
          </h2>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="text-green-600 font-semibold hover:underline"
            >
              📱 WhatsApp
            </a>

            <a
              href="mailto:example@gmail.com"
              className="text-red-600 font-semibold hover:underline"
            >
              📧 Gmail
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
