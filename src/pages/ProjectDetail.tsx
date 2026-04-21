import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Calendar,
  Layers
} from "lucide-react";
import { projects } from "../data/projects";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
            <Layers size={14} />
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center">
             <div className="flex items-center gap-2 text-muted-foreground bg-muted/30 px-4 py-2 rounded-xl border border-border">
                <Calendar size={16} />
                <span className="text-sm">Completed in 2024</span>
             </div>
             <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
              >
                {project.links.cta}
                <ExternalLink size={18} />
              </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-[48px] overflow-hidden border border-border shadow-2xl mb-16"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            {project.problem && (
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
                  <Target size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">The Problem</h2>
                </div>
                <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </section>
            )}

            {project.solution && (
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                  <Lightbulb size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">The Solution</h2>
                </div>
                <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </section>
            )}

            {project.description && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Overview</h2>
                <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </section>
            )}

            <div className="pt-8 flex justify-between items-center border-t border-border mt-16">
              <Link 
                to="/"
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-muted transition-colors font-bold"
              >
                <ArrowLeft size={18} /> Back to Projects
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-card p-8 rounded-[40px] border border-border sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Metadata</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 rounded-lg text-xs font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.impact && (
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-3">Key Results</h4>
                    <div className="flex gap-3 items-start p-4 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl">
                      <TrendingUp className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                      <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <Link 
                    to="/#contact"
                    className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                  >
                    Start a Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
