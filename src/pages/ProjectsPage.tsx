import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Sparkles, Folder } from "lucide-react";
import { projects } from "../data/projects";
import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-background min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
            <Folder size={14} />
            Complete Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-6">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive list of my work in system analysis, frontend development, and digital transformation. 
            Each project represents a solution to a specific business or technical challenge.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    View Details
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
                    Read More
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-blue-600 border border-blue-500 rounded-[48px] text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Have a complex system in mind?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and build a scalable solution together.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
