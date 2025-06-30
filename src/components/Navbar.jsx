import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10); // Fixed typo: screenY -> scrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        "py-3 bg-background/80 backdrop-blur-lg border-b border-border/10 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">
              Mohamed Abdelmajeed
            </span>{" "}
            Portfolio
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative"
              whileHover={{ y: -2 }}
            >
              {item.name}
              {isScrolled && (
                <motion.span
                  layoutId={`nav-underline-${index}`}
                  className="absolute left-0 top-full mt-1 h-0.5 w-full bg-primary"
                  initial={false}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-120"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "fixed inset-0 bg-gray-900 text-white z-100 h-screen flex flex-col items-center justify-center",
                "md:hidden"
              )}
            >
              <motion.div
                className="flex flex-col space-y-8 text-2xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
