import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aymanRahmanProfile.jpg";

const nameChars = "Ayman Rahman".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 520], [0, -90]);
  const parallaxOpacity = useTransform(scrollY, [280, 480], [1, 0.35]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 relative">
      <motion.div
        style={{ y: parallaxY, opacity: parallaxOpacity }}
        className="flex flex-col items-center justify-center w-full max-w-3xl"
      >
      {/* Profile photo in glass frame */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="mb-8"
      >
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-glass-glow">
            <img
              src={profilePic}
              alt="Ayman Rahman"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Animated name */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-center mb-4"
      >
        {nameChars.map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className={char === " " ? "inline-block w-4" : "inline-block"}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle with gradient */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-xl md:text-2xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift mb-6"
      >
        Full Stack Developer
      </motion.p>

      {/* Bio text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="max-w-lg text-center text-neutral-400 font-light leading-relaxed mb-12"
      >
        {HERO_CONTENT}
      </motion.p>

      </motion.div>

      {/* Scroll indicator — outside parallax so it stays anchored */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-neutral-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neutral-500">
            <path d="M10 4 L10 14 M5 10 L10 15 L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
