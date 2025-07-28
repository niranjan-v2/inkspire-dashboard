import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "runml",
      description: "Development of a C11 based source-source compiler.",
      longDescription:
        "This project is a development of a C11 based source-source compiler and runtime environment for a mini-language (ml). runml takes a program written in ml, transpiles it into C, and compiles it using standard C toolchains for execution. This serves as a simplified example of how high-level code can be translated and executed within the C ecosystem.",
      tags: ["c", "compiler", "algorithms"],
      year: 2023,
      link: "/runml",
      github: "https://github.com/niranjan-v2/mini-lang-transpiler",
      route: "/runml",
    },
    {
      id: 2,
      title: "Budgetly",
      description:
        "Built a budget-tracking application for users to help them manage their expenses.",
      longDescription:
        "Budgetly is a user-friendly budget tracking app that helps individuals manage and categorize their expenses, visualize spending patterns, and share data with others for improved financial transparency. It offers features like expense uploads, data visualizations, historical exports, and data sharing with custom time ranges. A future feature is set to introduce expense prediction functionality, which will analyze past spending trends to predict future expenses, offering users proactive recommendations for adjusting their budgets.",
      tags: ["python", "flask", "full-stack", "web"],
      year: 2022,
      link: "#",
      github: "https://github.com/niranjan-v2/budgetly",
    },
    {
      id: 3,
      title: "Blockchain Explorer",
      description:
        "Web interface for exploring transactions on a custom blockchain.",
      longDescription:
        "React frontend for visualizing blocks, transactions, and wallet balances. Features real-time updates via WebSocket and address tagging system. Includes transaction graph visualization using D3.js.",
      tags: ["react", "blockchain", "d3"],
      year: 2023,
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  const allTags = [
    "all",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  return (
    <div className="max-w-full mx-auto px-6 py-8 font-mono bg-gray-50 dark:bg-[#0a192f] text-gray-800 dark:text-[#ccd6f6] transition-colors duration-300">
      <header className="mb-12 relative">
        <div className="bg-gray-200 dark:bg-[#1e2a47] px-4 py-2 rounded-t-lg flex items-center mb-[-1px] justify-between">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <span className="ml-4 text-sm text-gray-600 dark:text-[#8892b0]">
            work_terminal -- user@dev: ~/projects
          </span>
        </div>
        <h1 className="text-3xl mt-6 mb-2">
          <span className="text-blue-600 dark:text-[#00ff9d] mr-2">$</span>
          <span className="bg-gradient-to-r from-blue-600 to-pink-500 dark:from-[#00ff9d] dark:to-[#00b8ff] bg-clip-text text-transparent">
            What I've Built
          </span>
        </h1>
        <p className="text-gray-600 dark:text-[#8892b0] italic mb-8 text-sm">
          // with thought, purpose and ♥
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded border text-sm font-mono transition-all ${
              activeTab === tag
                ? "bg-blue-600 text-white dark:bg-[#00ff9d] dark:text-[#0a192f] border-blue-600 dark:border-[#00ff9d] font-bold"
                : "bg-transparent text-blue-600 dark:text-[#00ff9d] border-blue-600 dark:border-[#00ff9d]"
            }`}
            onClick={() => setActiveTab(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#112240] rounded-lg p-6 border border-gray-200 dark:border-[rgba(100,255,218,0.2)] shadow-sm dark:shadow-none"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-[#00ff9d] m-0">
                {project.route ? (
                  <Link to={project.route} className="hover:underline">
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <span className="bg-blue-100 dark:bg-[rgba(0,255,157,0.1)] text-blue-600 dark:text-[#00ff9d] px-2 py-1 rounded text-xs min-w-[60px] text-center">
                {project.year}
              </span>
            </div>

            <p className="text-gray-600 dark:text-[#8892b0] mb-4 text-sm">
              {project.description}
            </p>

            <p className="text-gray-600 dark:text-[#8892b0] my-4 text-sm leading-relaxed">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 dark:bg-[rgba(0,184,255,0.1)] text-blue-600 dark:text-[#00b8ff] px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                className="text-blue-600 dark:text-[#00ff9d] no-underline inline-flex items-center transition-opacity hover:opacity-80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">🌐</span> Portal
              </a>
              <a
                href={project.github}
                className="text-blue-600 dark:text-[#00ff9d] no-underline inline-flex items-center transition-opacity hover:opacity-80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">💻</span> View Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-12 text-gray-600 dark:text-[#8892b0] text-sm pt-8 border-t border-gray-200 dark:border-[#8892b0]/20">
        <div className="mb-4 flex justify-center items-center">
          <span className="text-blue-600 dark:text-[#00ff9d] mr-2">$</span>
          <span className="text-gray-800 dark:text-[#ccd6f6]">
            cat me.txt
          </span>
        </div>
        <p>Built with ❤️ • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
