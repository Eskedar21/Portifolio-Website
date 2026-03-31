import { motion } from "motion/react";
import { Code, Database, Layout, Smartphone, Globe, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      description: "Building responsive, high-performance web applications using modern frameworks like React and Next.js.",
      color: "bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
    },
    {
      title: "System Analysis",
      icon: <Database size={24} />,
      description: "Analyzing complex business requirements and designing robust system architectures for optimal performance.",
      color: "bg-purple-600/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400",
    },
    {
      title: "UI/UX Design",
      icon: <Code size={24} />,
      description: "Creating intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.",
      color: "bg-emerald-600/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    },
    {
      title: "Mobile Optimization",
      icon: <Smartphone size={24} />,
      description: "Ensuring your digital products look and perform flawlessly across all devices and screen sizes.",
      color: "bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400",
    },
    {
      title: "Web Performance",
      icon: <Globe size={24} />,
      description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
      color: "bg-rose-600/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400",
    },
    {
      title: "Security & Compliance",
      icon: <Shield size={24} />,
      description: "Implementing best practices for data security and ensuring compliance with industry standards.",
      color: "bg-cyan-600/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full"
          >
            My Services
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-8">
            Comprehensive Solutions <br />
            for Your Digital Needs
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I offer a wide range of services designed to help you build, 
            optimize, and scale your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-card border border-border rounded-[40px] hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
