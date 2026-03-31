import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-foreground tracking-tighter mb-2">ESKEDAR TESFAYE</h2>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs">
              Frontend Developer & System Analyst
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Eskedar21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-2xl transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/eskedar-tesfaye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-2xl transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:tesfayeeskedar12@gmail.com" className="p-3 bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-2xl transition-all">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-4 bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-all group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Eskedar Tesfaye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
