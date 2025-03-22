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
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                  Passionate Front-End Developer skilled in React.js, TypeScript, and modern web technologies.  
                  Experienced in building scalable, high-performance web applications with a strong focus on user experience.  
                  Enthusiastic about learning new technologies and creating innovative solutions to real-world problems.
  
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend (Beginner)</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Information Technology </strong> - H.N.B Garhwal University Uttarakhand
               
                </li>
                <li>
                  Relevant Coursework: MERN Stack Development (ongoing)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <br/><br/>
              <div className="space-y-4 text-gray-300">
                <div>
                <br/>
                  <h4 className="font-semibold bg-amber-700">
                   Software Development Engineer (SDE) Intern at Bluestock Fintech (March 2025 - Present)
                  </h4><br/>
                  <p>
                      Assisting in the development and optimization of fintech applications, focusing on scalable and efficient solutions.  
                      Collaborating with senior developers to implement new features and improve system performance.  
                     Gaining hands-on experience in modern web technologies, software architecture, and cloud-based microservices.  
                  </p>

               
                </div>
                <br/><br/>
                <div>
                <h4 className="font-semibold bg-amber-700">
                 Front-End Developer Intern at CODEXINTERN (Jan 2025)
                </h4><br/>
                <p>
                   Developed dynamic and responsive web applications using React.js and Tailwind CSS.  
                   Integrated RESTful APIs using Axios to fetch and display real-time data.  
                   Improved UI/UX components for a seamless user experience.  
                  Gained hands-on experience in state management and performance optimization.  
                </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};