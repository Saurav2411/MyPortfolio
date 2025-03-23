import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Portfolio Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">MyPortfolio</h3>
              <p className="text-gray-400 mb-4">
                A modern portfolio website showcasing my skills, projects, and contact information, built with React and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Vite", "Email JS"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://my-portfolio-rouge-kappa-50.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                <a href="https://github.com/Saurav2411/MyPortfolio" className="text-gray-400 hover:text-gray-300 transition-colors my-4">GitHub</a>
              </div>
            </div>

            {/* Travel Dagdiya */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Travel Dagdiya</h3>
              <p className="text-gray-400 mb-4">
                A travel discovery and booking platform that helps users explore Uttarakhand, and plan trips efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Vite", "React Router"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://travel-dagdiya.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                <a href="https://github.com/Saurav2411/travel-Dagdiya" className="text-gray-400 hover:text-gray-300 transition-colors my-4">GitHub</a>
              </div>
            </div>

            {/* V-Together */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">V-Together</h3>
              <p className="text-gray-400 mb-4">
                A real-time video chat application using ZegoCloud API for seamless peer-to-peer communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Reactjs", "ZegoCloud API", "Tailwind CSS", "WebRTC"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://video-chat-five-beryl.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                <a href="https://github.com/Saurav2411/Video-Chat" className="text-gray-400 hover:text-gray-300 transition-colors my-4">GitHub</a>
              </div>
            </div>

            {/* Spotify Song Downloader */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Spotify Song Downloader</h3>
              <p className="text-gray-400 mb-4">
                A web-based tool that allows users to download their favorite Spotify tracks easily using Spotify API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "Spotify API"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://spotify-song-downloader-silk.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                <a href="https://github.com/Saurav2411/Spotify-song-downloader" className="text-gray-400 hover:text-gray-300 transition-colors my-4">GitHub</a>
              </div>
            </div>

            {/* To-Do List App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">To-Do List App</h3>
              <p className="text-gray-400 mb-4">
                A feature-rich task management app for organizing daily activities with an intuitive and minimal UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Vite", "Local Storage"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://to-do-list-app-react-js-seven.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                <a href="https://github.com/Saurav2411/ToDo-list-app-REACT-JS-" className="text-gray-400 hover:text-gray-300 transition-colors my-4">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
