import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const copyEmail = () => {
    navigator.clipboard.writeText("moabdelmajeed01@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/Abdelmajeed0",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/mohamed-abdelmajeed-589248325/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={18} />,
      onClick: copyEmail,
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mohamed Abdelmajeed. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <span className="text-primary">Next.js</span>
              <span>and</span>
              <span className="text-primary">Tailwind CSS</span>
            </div>
          </div>

          {/* Middle section - Social links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={link.onClick}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={link.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Right section - Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center gap-2"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
            <span className="hidden sm:inline">Back to top</span>
          </motion.button>
        </div>

        {/* Email copy feedback */}
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </div>
    </footer>
  );
};
