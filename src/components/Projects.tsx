import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";

const projects = [
  {
    title: "File Storage & Sharing Web App",
    description:
      "A full-stack file storage and sharing application with user authentication, file upload/download using AWS S3, and a responsive dashboard for managing files securely.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    category: "Full Stack",
    github: "https://github.com/pavankumar",
    demo: "#",
    image: "",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "A machine learning web app that predicts the likelihood of diabetes using patient health data. Built with Scikit-learn for ML models and Streamlit for the interactive UI.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    category: "ML",
    github: "https://github.com/pavankumar",
    demo: "#",
    image: "",
  },
  {
    title: "Greenbin Waste Management System",
    description:
      "An end-to-end waste management platform enabling users to report, track, and manage waste collection. Features role-based access and real-time status updates.",
    tech: ["React", "Node.js", "MySQL"],
    category: "Full Stack",
    github: "https://github.com/pavankumar",
    demo: "#",
    image: "",
  },
];

const filters = ["All", "Full Stack", "ML"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-10 flex-wrap"
        >
          <Filter size={16} className="text-muted-foreground" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/20 transition-all"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  {project.category === "ML" ? "🧠" : "💻"}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
