import { motion } from "framer-motion";

const Scene3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(160 84% 50% / 0.3), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(250 80% 65% / 0.25), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(190 90% 50% / 0.2), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 84% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default Scene3D;
