import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_TEXT, TECHNOLOGIES } from "../constants";
import aboutImg from "../assets/about.jpg";

const aboutSentences = ABOUT_TEXT.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-thin tracking-tight text-center mb-16"
      >
        About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">Me</span>
      </motion.h2>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Glass card: bio + tech — enters from left */}
        <motion.div
          initial={{ opacity: 0, x: -56 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-3/5 w-full"
        >
          <div className="glass-card p-8">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.25 },
                },
              }}
              className="space-y-4 mb-8"
            >
              {aboutSentences.map((sentence, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
                    },
                  }}
                  className="text-neutral-300 leading-relaxed text-base"
                >
                  {sentence}
                </motion.p>
              ))}
            </motion.div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                Technologies
              </h3>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.55 },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {TECHNOLOGIES.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85, y: 8 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    className="glass-pill"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Photo in glass frame — right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 56 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-2/5 flex-shrink-0 w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative glass-card overflow-hidden p-2">
              <img
                src={aboutImg}
                alt="About Ayman"
                className="w-full rounded-xl object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
