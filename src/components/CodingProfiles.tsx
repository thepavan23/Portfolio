import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/pavankumar",
    desc: "Open source contributions & projects",
    color: "hover:border-foreground/30",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/pavankumar",
    desc: "Problem solving & algorithms",
    color: "hover:border-amber-500/30",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    url: "https://hackerrank.com/pavankumar",
    desc: "Certifications & challenges",
    color: "hover:border-emerald-500/30",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    url: "https://codechef.com/users/pavankumar",
    desc: "Competitive programming contests",
    color: "hover:border-amber-700/30",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding-profiles" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(250_80%_65%_/_0.04),transparent_70%)]" />
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Coding <span className="gradient-text-primary">Profiles</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-primary mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`glass-card rounded-xl p-6 transition-all group ${p.color}`}
            >
              <p.icon className="w-10 h-10 text-foreground mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                {p.name}
                <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">GitHub Stats</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=pavankumar&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117"
              alt="GitHub Stats"
              className="rounded-lg max-w-full"
              loading="lazy"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=pavankumar&theme=radical&hide_border=true&background=0d1117"
              alt="GitHub Streak"
              className="rounded-lg max-w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
