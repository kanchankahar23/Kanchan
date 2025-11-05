import React from "react";

const projects = [
  {
    id: 1,
    title: "Movie Hub",
    description: "A responsive movie browsing app built with React and Tailwind CSS.",
    image: "/img/moviehub.png",
    github: "https://github.com/kanchan/movie-hub",
    live: "https://movie-hub.vercel.app",
  },
  {
    id: 2,
    title: "BookVista",
    description: "A full-stack book listing website with login and CRUD features.",
    image: "/img/bookvista.png",
    github: "https://github.com/kanchan/bookvista",
    live: "https://bookvista.vercel.app",
  },
  {
    id: 3,
    title: "Gemini AI ChatBot",
    description: "A Gemini AI Clone built with React + Vite that mimics the user interface of Google Gemini",
    image: "",
    github: "https://github.com/kanchankahar23/Gemini-clone",
    live: "gemini-clone-tan-iota.vercel.app"
  },
  {
    id: 4,
    title: "FlyEasy",
    description: "A simple Flight booking website.",
    image: "",
    github: "https://github.com/kanchankahar23/FlyEasy",
    live: "fly-easy-psi.vercel.app"
  },
  {
    id: 5,
    title: "Netflix",
    description: "",
    image: "",
    github: "https://github.com/kanchankahar23/Netflix-clone",
    live:"",
  }
];

const Projects = () => {
  return (
    <div className="bg-[#041122] text-white py-6 px-6 md:px-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#E6F99D]">My Latest Work</h1>
        <p className="text-gray-400 mt-2">
          Here are some of the projects I’ve built recently 👇
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-amber-300">
                {project.title}
              </h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 px-4 py-2 rounded-lg text-sm hover:bg-amber-600"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
