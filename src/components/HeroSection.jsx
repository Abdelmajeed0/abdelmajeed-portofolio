import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float-medium" />
        <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-3xl animate-float-fast" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-7xl font-bold tracking-tight"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span
              className="block"
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              Hi, I am
            </motion.span>
            <motion.span
              className="text-primary block"
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Mohamed
            </motion.span>
            <motion.span
              className="text-gradient block"
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Abdelmajeed
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            <TypeAnimation
              sequence={[
                "I create stellar web experiences with modern technologies.",
                1000,
                "I specialize in front-end development.",
                1000,
                "I build interfaces that are both beautiful and functional.",
                1000,
                "Let's create something amazing together!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8 flex gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="cosmic-button hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass-button hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20],
        }}
        transition={{
          delay: 1.8,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>
    </section>
  );
};
