import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
              <Sparkles size={14} />
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-6">
              My <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                System Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore my latest work across system analysis and frontend development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-[40px] overflow-hidden hover:border-blue-600/30 transition-all flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link 
                    to={`/project/${project.id}`}
                    className="px-6 py-2 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.problem || project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  <Link 
                    to={`/project/${project.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-blue-600 flex items-center gap-2 transition-colors group/link"
                  >
                    Read Full Story
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
