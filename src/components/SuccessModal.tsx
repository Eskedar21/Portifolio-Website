import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card w-full max-w-sm rounded-[32px] border border-border shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="p-8 text-center">
                <div className="flex justify-end -mt-4 -mr-4 mb-4">
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <X size={20} className="text-muted-foreground" />
                  </button>
                </div>

                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/10 text-emerald-600 rounded-2xl mb-6">
                  <CheckCircle2 size={32} />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tighter mb-2">Message Sent!</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {message || "Thank you for reaching out. I'll get back to you as soon as possible."}
                </p>

                <button
                  onClick={onClose}
                  className="w-full py-4 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
