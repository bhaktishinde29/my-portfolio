export default function About() {
  return (
    <div className="py-24">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-8xl">
            👩‍💻
          </div>
        </div>

        {/* Right Side */}
        <div>

          <h3 className="text-3xl font-bold mb-4">
            Electronics & Computer Engineering Student
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            I'm Bhakti, an Electronics and Computer Engineering student
            passionate about web development, Python programming,
            technology, and creating impactful digital experiences.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I enjoy building projects, learning new technologies,
            solving real-world problems, and continuously improving
            my technical and creative skills.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Education
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                B.Tech Electronics & Computer Engineering
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Interests
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Web Dev, Python, UI Design
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Projects
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Portfolio, Recipe App, Book Club
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Goal
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Software Engineer & Startup Builder
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}