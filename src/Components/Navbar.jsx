import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OopsLogicLogo from "../assets/OopsLogicLogo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Courses', href: '#courses' },
    { label: 'Contact', href: '#contact' },
  ];

  // 🔥 Smooth Scroll Function (FIXED)
  const scrollToSection = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (!element) return;

    const yOffset = -100; // navbar height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  // 🔥 Scroll Spy (IMPROVED)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = '#home';

      for (let item of menuItems) {
        const section = document.querySelector(item.href);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.href;
          break;
        }
      }

      setActiveSection(current);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // 🔥 Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Strip */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          Free Demo Class Available • New Batch Starts Soon
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-10 bg-white/80 backdrop-blur-xl shadow-md py-3'
            : 'top-10 bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3"
          >
            <img src={OopsLogicLogo} className="h-10" />
            <div>
              <p className="font-bold">Oops Logic</p>
              <span className="text-xs text-gray-500">
                Learn • Build • Grow
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-2 bg-white/70 backdrop-blur rounded-full p-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold ${
                    isActive ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-blue-600 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2"
            >
              Book Demo <ChevronRight size={18} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-24 left-4 right-4 bg-white rounded-xl shadow-lg p-5 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 font-semibold border-b"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}