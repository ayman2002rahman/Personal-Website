import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCES } from "../constants";

const TimelineCard = ({ experience, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start mb-16 last:mb-0">
      {/* Desktop: alternating sides */}
      <div className="hidden lg:flex w-full items-start">
        {/* Left content */}
        <div className={`w-[calc(50%-32px)] ${isLeft ? "" : "order-3"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card glass-card-hover p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {experience.role}
            </h3>
            <p className="text-purple-300/80 text-sm font-medium mb-3">
              {experience.company}
            </p>
            <ul className="space-y-2 mb-4">
              {experience.description.map((item, i) => (
                <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-purple-400/60 mt-1.5 flex-shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span key={tech} className="glass-pill text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center node */}
        <div className="w-16 flex flex-col items-center order-2 flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            className="timeline-node"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xs text-neutral-500 whitespace-nowrap font-medium"
          >
            {experience.year.split(" - ")[0]}
          </motion.p>
        </div>

        {/* Right spacer */}
        <div className={`w-[calc(50%-32px)] ${isLeft ? "order-3" : ""}`} />
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden flex items-start w-full">
        <div className="flex flex-col items-center mr-4 flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-3 h-3 rounded-full bg-purple-500/60 border-2 border-purple-400/80 shadow-glow-sm"
          />
          <div className="w-[2px] flex-1 bg-gradient-to-b from-purple-500/30 to-transparent mt-2" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card glass-card-hover p-5 flex-1"
        >
          <p className="text-xs text-neutral-500 mb-2 font-medium">{experience.year}</p>
          <h3 className="text-base font-semibold text-white mb-1">{experience.role}</h3>
          <p className="text-purple-300/80 text-sm mb-3">{experience.company}</p>
          <ul className="space-y-1.5 mb-3">
            {experience.description.map((item, i) => (
              <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                <span className="text-purple-400/60 mt-1 flex-shrink-0">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span key={tech} className="glass-pill text-xs">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-thin tracking-tight text-center mb-20"
      >
        Exper<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">ience</span>
      </motion.h2>

      <div className="relative">
        {/* Desktop timeline line */}
        <div className="hidden lg:block timeline-line" />

        {EXPERIENCES.map((exp, i) => (
          <TimelineCard key={i} experience={exp} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
