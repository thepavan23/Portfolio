import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="gradient-text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-primary mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-16 md:pl-0 md:w-1/2 md:pr-12"
          >
            {/* Dot */}
            <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary glow-primary border-4 border-background md:left-auto md:-right-2.5" />

            <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all">
              <div className="flex items-center gap-2 text-sm text-primary font-mono mb-2">
                <Calendar size={14} />
                2025
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1 flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                Full Stack Web Developer Intern
              </h3>
              <p className="text-primary/80 font-medium mb-3">Blackbuck Engineers</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Developed and maintained full-stack web applications using the MERN stack.
                Implemented cloud storage solutions with AWS S3, built responsive UIs,
                and contributed to backend API development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
