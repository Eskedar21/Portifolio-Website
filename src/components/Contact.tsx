import { motion } from "motion/react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.message);
        setIsModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border transition-colors duration-300">
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        message={successMsg}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-full">
              <Mail size={14} />
              Contact Me
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-8">
              Let's Build Something <br />
              Impactful Together
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Have a project in mind or want to discuss a potential collaboration? 
              I'm always open to new opportunities.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-card text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-blue-400 group-hover:text-white dark:group-hover:text-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-1">Phone</p>
                  <p className="text-xl font-bold text-foreground tracking-tight">0940917241 / 0777096116</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-card text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-blue-400 group-hover:text-white dark:group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-1">Email</p>
                  <p className="text-xl font-bold text-foreground tracking-tight">tesfayeeskedar12@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 bg-card border border-border rounded-[40px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
