import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Vehicle Inspection System (Inspector Platform)",
      category: "Vehicle Inspection & Reporting System",
      description: "A system designed for inspectors to record, manage, and submit vehicle inspection data efficiently.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800&h=600",
      tags: ["React", "System Analysis", "Data Management"],
      links: { demo: "https://vims-five.vercel.app/#/dashboard", cta: "View Inspector App" },
    },
    {
      title: "Vehicle Inspection Admin Dashboard",
      category: "Vehicle Inspection & Reporting System",
      description: "An admin portal for managing inspections, reviewing reports, and monitoring system data through dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
      tags: ["React", "Admin Portal", "Analytics"],
      links: { demo: "https://vims-admin-portal.vercel.app/", cta: "View Admin Portal" },
    },
    {
      title: "E-Government Index Reporting System",
      category: "Project 2",
      description: "A platform that evaluates and scores regional digital presence by collecting survey data and generating insights through interactive dashboards and reports.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=600",
      tags: ["Next.js", "React", "Tailwind CSS"],
      links: { demo: "https://e-girs.vercel.app/dashboard", cta: "View System" },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
              <Folder size={14} />
              Featured Projects
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-6">
              Showcasing My Best <br />
              Digital Creations
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore a selection of my recent projects, ranging from complex 
              web applications to intuitive user interfaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-[40px] overflow-hidden hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    {project.links.cta}
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-background border border-border rounded-full text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
