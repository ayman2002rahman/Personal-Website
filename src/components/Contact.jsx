import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { CONTACT } from "../constants";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-24 px-4 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-thin tracking-tight text-center mb-16"
      >
        Get in{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">
          Touch
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-card p-8 md:p-10 text-center"
      >
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3 text-neutral-400">
            <HiOutlineLocationMarker className="text-purple-400/60 flex-shrink-0" size={18} />
            <span className="text-sm">{CONTACT.location}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-neutral-400">
            <HiOutlinePhone className="text-purple-400/60 flex-shrink-0" size={18} />
            <span className="text-sm">{CONTACT.phoneNo}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-neutral-400">
            <HiOutlineMail className="text-purple-400/60 flex-shrink-0" size={18} />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm hover:text-purple-300 transition-colors duration-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* CTA button */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white font-medium text-sm hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 hover:shadow-glow-md transition-all duration-300"
        >
          Say Hello
        </motion.a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mt-8 pt-6 border-t border-white/[0.06]">
          <a
            href="https://www.linkedin.com/in/ayman-awsaf-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ayman2002rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://x.com/Scarlizar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <FaSquareXTwitter size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Ayman Rahman. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
