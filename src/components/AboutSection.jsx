import { Briefcase, Code, User, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const downloadRef = useRef(null);

  const handleDownloadCV = () => {
    const cvUrl = "/my-cv.pdf"; // Path relative to public folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mohamed-Abdelmajeed-CV.pdf"; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-secondary/5 blur-3xl animate-float-medium" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating elegant solutions to complex
              problems, and I am constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                className="cosmic-button hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                ref={downloadRef}
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                description:
                  "Creating responsive websites and web applications with modern frameworks.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                description:
                  "Designing intuitive user interfaces and seamless user experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                description:
                  "Leading projects from conception to completion with agile methodologies.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="gradient-border p-6 card-hover"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
