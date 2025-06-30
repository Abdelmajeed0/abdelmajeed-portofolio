import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Tulos Ecommerce",
    description:
      "Full-featured e-commerce platform built with modern web technologies",
    image: "/projects/project1.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Framer Motion", "Sanity.io"],
    demoUrl: "https://tulos-ecommerce-pearl.vercel.app/#",
    githubUrl: "https://github.com/Abdelmajeed0/tulos_ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Maharet Tefl",
    description: "An e-learning platform for children with interactive lessons",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "Context API", "Stripe"],
    demoUrl: "https://maharet-tefl.netlify.app/",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Sunburst Chart Explorer",
    description:
      "Interactive hierarchical data visualization tool with drill-down navigation",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://sunburst-chart1.netlify.app/",
    githubUrl: "https://github.com/Abdelmajeed0/chart",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-float-medium" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            variants={itemVariants}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg card-hover"
                variants={itemVariants}
                custom={index}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-yellow-500/90 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    <Star size={14} /> Featured
                  </div>
                )}

                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm text-primary font-medium flex items-center"
                      >
                        <a
                          href={`${project.demoUrl}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          Explore <ArrowRight size={16} className="ml-1" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-16" variants={itemVariants}>
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Abdelmajeed0"
            >
              <span>View All Projects</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
