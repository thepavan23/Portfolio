import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FolderOpen } from "lucide-react";
import Scene3D from "./Scene3D";

const roles = [
  "Java",
  "Data Structures",
  "React.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "AWS",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < target.length) {
            setText(target.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(160_84%_50%_/_0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(250_80%_65%_/_0.06),transparent_50%)]" />

      <div className="absolute right-0 top-0 w-full h-full">
        <Scene3D />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-foreground">Pavan Kumar</span>
            <br />
            <span className="gradient-text-primary">Gannabathula</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-lg md:text-xl mb-8 h-8"
          >
            <span className="text-muted-foreground">{">"} </span>
            <span className="text-primary">{text}</span>
            <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
              &nbsp;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-sm text-muted-foreground mb-8 flex items-center gap-2"
          >
            📍 India • Open to Software Developer Roles
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary"
            >
              <FolderOpen size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-all"
            >
              <Mail size={18} />
              Contact
            </a>
            <a
              href="https://github.com/pavankumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
