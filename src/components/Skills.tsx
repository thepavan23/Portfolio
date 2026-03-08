import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "SQL"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "DSA",
    skills: ["Arrays", "Strings", "Linked Lists", "Recursion", "Sorting", "Dynamic Programming"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS S3"],
    color: "from-sky-500 to-indigo-500",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_84%_50%_/_0.04),transparent_70%)]" />
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech <span className="gradient-text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-primary mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
