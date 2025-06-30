import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-float-medium" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            variants={fadeInVariants}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={fadeInVariants}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I am always open to discussing new opportunities.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div className="space-y-8" variants={fadeInVariants}>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-primary" />,
                    title: "Email",
                    content: "moabdelmajeed01@gmail.com",
                    href: "mailto:moabdelmajeed01@gmail.com",
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-primary" />,
                    title: "Phone",
                    content: "+20 1019640616",
                    href: "tel:+201019640616",
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-primary" />,
                    title: "Location",
                    content: "Cairo, Egypt",
                    href: "#",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Linkedin className="h-6 w-6" />,
                      href: "https://www.linkedin.com/in/mohamed-abdelmajeed-589248325/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Github className="h-6 w-6" />,
                      href: "https://github.com/Abdelmajeed0",
                      label: "GitHub",
                    },
                    {
                      icon: <Facebook className="h-6 w-6" />,
                      href: "https://www.facebook.com/mohamed.abdelmajeed.587235",
                      label: "Facebook",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                      whileHover={{ y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-xl shadow-lg"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all",
                      errors.name && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all",
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="john@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none",
                      errors.message && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Hello, I'd like to talk about..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                    isSubmitting && "opacity-80"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
