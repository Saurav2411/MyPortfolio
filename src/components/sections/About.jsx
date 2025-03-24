import { RevealOnScroll } from "../RevealOnScroll";
import { FiDownload } from "react-icons/fi"; // Import download icon

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
    "Vite",
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
            <p className="text-gray-300 mb-6">
              I am a passionate **Frontend Developer** specializing in **React.js, TypeScript, and modern UI frameworks** like **Tailwind CSS and Vite**. 
              With experience in building **scalable, high-performance web applications**, I focus on crafting **seamless and engaging user experiences**.  
              I enjoy **problem-solving, optimizing application performance, and integrating APIs** to enhance functionality.  
              Constantly eager to **learn and experiment with new technologies**, I strive to develop **innovative solutions** that address real-world challenges.
            </p>

            {/* Resume Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
            
              <a
                href="https://drive.google.com/file/d/1S7Hnn8MNHL13gsKuJl3f36raC7hxpxr3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Resume
              </a>

              
              <a
                href="https://drive.google.com/file/d/1S7Hnn8MNHL13gsKuJl3f36raC7hxpxr3/view?usp=sharing"
                download="Saurav_Chauhan_Resume.pdf"
                className="bg-gray-800 text-white py-1 px-1 rounded-lg font-medium flex items-center space-x-2 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FiDownload size={20} /> 
              </a>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Frontend Skills */}
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

              {/* Backend Skills */}
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
        </div>
      </RevealOnScroll>
    </section>
  );
};
