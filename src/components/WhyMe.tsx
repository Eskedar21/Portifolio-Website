import { motion } from "motion/react";
import { CheckCircle2, Zap, Target, Users } from "lucide-react";

export default function WhyMe() {
  const reasons = [
    {
      title: "Efficiency-First Approach",
      icon: <Zap size={24} />,
      description: "I focus on building systems that are fast, scalable, and easy to maintain, saving you time and resources in the long run.",
    },
    {
      title: "Data-Driven Decisions",
      icon: <Target size={24} />,
      description: "Every design and technical choice I make is backed by thorough analysis and aligned with your core business goals.",
    },
    {
      title: "User-Centric Design",
      icon: <Users size={24} />,
      description: "I prioritize the end-user experience, ensuring that every interaction is intuitive, accessible, and engaging.",
    },
    {
      title: "Proven Track Record",
      icon: <CheckCircle2 size={24} />,
      description: "With a history of successful projects and satisfied clients, I bring reliable expertise to every new challenge.",
    },
  ];

  return (
    <section id="why-me" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
              Why Choose Me
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-8">
              Experience the Power <br />
              of Strategic Development
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              I don't just write code; I build solutions that solve real problems 
              and drive growth. My unique blend of technical skill and analytical 
              insight ensures your project's success.
            </p>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-[32px] hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all group flex gap-6"
              >
                <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
