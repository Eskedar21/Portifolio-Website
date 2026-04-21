import { motion } from "motion/react";
import { User, Code, Database, Layout } from "lucide-react";

export default function About() {
  const skills = [
    { name: "System Analysis", icon: <Database size={20} />, description: "Requirement gathering, workflow design, and business logic mapping." },
    { name: "Frontend Development", icon: <Layout size={20} />, description: "React, Next.js, and TypeScript for scalable, high-performance apps." },
    { name: "UI/UX Design", icon: <Code size={20} />, description: "Crafting clean, intuitive, and user-friendly digital interfaces." },
    { name: "Computer Engineering", icon: <User size={20} />, description: "Strong technical foundation in hardware and software systems." },
  ];

  return (
    <section id="about" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
              <User size={14} />
              About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-8">
              Bridging the Gap Between <br />
              Code and Business
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I’m Eskedar Tesfaye, a Frontend Developer and System Analyst with a background in Computer Engineering.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
              I specialize in transforming business requirements into functional, user-friendly systems. With hands-on experience in system analysis, I understand how to gather requirements, design workflows, and build solutions that align with real organizational needs.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              I have developed real-world platforms, including vehicle inspection systems and e-government evaluation tools, focusing on clean UI, efficient data handling, and practical usability. Using modern technologies like React and Next.js, I build scalable applications with a strong focus on performance, structure, and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-[32px] hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all group"
              >
                <div className="w-12 h-12 bg-background border border-border rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
