import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../constants";
import { useSmoothScrollTo } from "../ScrollContext";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollToTarget = useSmoothScrollTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-38% 0px -42% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToTarget(href);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`glass-navbar mx-auto max-w-5xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-glass-glow" : ""
        }`}
      >
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-lg font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          AR
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3 text-neutral-400">
          <a href="https://www.linkedin.com/in/ayman-awsaf-rahman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com/ayman2002rahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub size={16} />
          </a>
          <a href="https://x.com/Scarlizar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaSquareXTwitter size={16} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-navbar mx-auto max-w-5xl mt-2 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-white/[0.06]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.06] text-neutral-400">
              <a href="https://www.linkedin.com/in/ayman-awsaf-rahman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/ayman2002rahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://x.com/Scarlizar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaSquareXTwitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
