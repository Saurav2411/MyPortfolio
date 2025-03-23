import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Redux",
    "React Query",
    "API Integration"
  ];

  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Passionate Front-End Developer with expertise in React.js, TypeScript, and modern web technologies.</li>
              <li>Specialized in building scalable, high-performance web applications with a strong focus on user experience.</li>
              <li>Constantly eager to learn and experiment with new technologies.</li>
              <li>Strives to create innovative solutions to real-world problems.</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend (Beginner)</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Information Technology</strong> - H.N.B Garhwal University, Uttarakhand
                </li>
                <li>
                  Relevant Coursework: MERN Stack Development (Ongoing)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg text-blue-400">Software Development Engineer (SDE) Intern at Bluestock Fintech (March 2025 - Present)</h4>
                  <ul className="mt-2 list-disc list-inside space-y-2">
                    <li>Assisting in the development and optimization of fintech applications, ensuring scalability and efficiency.</li>
                    <li>Collaborating with senior developers to implement new features and enhance system performance.</li>
                    <li>Gaining hands-on experience in modern web technologies, software architecture, and cloud-based microservices.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-blue-400">Front-End Developer Intern at CODEXINTERN (Jan 2025)</h4>
                  <ul className="mt-2 list-disc list-inside space-y-2">
                    <li>Developed dynamic and responsive web applications using React.js and Tailwind CSS.</li>
                    <li>Integrated RESTful APIs using Axios to fetch and display real-time data.</li>
                    <li>Improved UI/UX components to enhance user experience.</li>
                    <li>Gained hands-on experience in state management and performance optimization.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
