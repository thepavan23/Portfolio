import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Brain, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "MERN Stack", desc: "Full-stack web development" },
  { icon: Cloud, label: "AWS S3", desc: "Cloud storage & deployment" },
  { icon: Brain, label: "ML Projects", desc: "Machine learning solutions" },
  { icon: Zap, label: "Problem Solver", desc: "DSA & competitive coding" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate Full Stack Web Developer with hands-on experience in the
                <span className="text-primary font-medium"> MERN stack</span>,
                cloud services like <span className="text-primary font-medium">AWS S3</span>,
                and building end-to-end web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on machine learning projects including a Diabetes Prediction System,
                and I enjoy solving complex problems through clean, scalable code.
                My expertise spans from crafting responsive frontends with React and Tailwind CSS
                to building robust backend APIs with Node.js and Express.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm an active competitive programmer on platforms like LeetCode, HackerRank,
                and CodeChef, constantly sharpening my problem-solving skills in
                Data Structures & Algorithms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
