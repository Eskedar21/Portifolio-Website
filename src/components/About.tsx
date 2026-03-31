import { motion } from "motion/react";
import { User, Code, Database, Layout } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend Development", icon: <Layout size={20} />, description: "React, TypeScript, Tailwind CSS" },
    { name: "System Analysis", icon: <Database size={20} />, description: "Requirement gathering, System design" },
    { name: "UI/UX Design", icon: <Code size={20} />, description: "Figma, Responsive layouts" },
    { name: "Problem Solving", icon: <User size={20} />, description: "Analytical thinking, Debugging" },
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
              I am a Frontend Developer and System Analyst with a passion for creating 
              digital experiences that are not only visually stunning but also 
              structurally sound and aligned with business objectives.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              With a background in both technical implementation and high-level 
              system analysis, I bring a unique perspective to every project, 
              ensuring that the final product meets both user needs and technical 
              requirements.
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
