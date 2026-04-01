import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../constants";

const INITIAL_VISIBLE = 4;

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover h-full">
        {/* Project image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 -mt-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="glass-pill text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [showAll, setShowAll] = useState(false);
  const hasMore = PROJECTS.length > INITIAL_VISIBLE;
  const visibleProjects = useMemo(() => {
    if (!hasMore || showAll) return PROJECTS;
    return PROJECTS.slice(0, INITIAL_VISIBLE);
  }, [hasMore, showAll]);

  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-thin tracking-tight text-center mb-4"
      >
        Pro<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">jects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-neutral-500 text-sm max-w-xl mx-auto mb-14"
      >
        A growing gallery — each card scales from the projects list in code.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="glass-pill px-8 py-2.5 text-sm font-medium text-neutral-200 hover:text-white cursor-pointer"
          >
            {showAll ? "Show less" : `View all (${PROJECTS.length})`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
