import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-md' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl w-full ${maxWidth} overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]`}
            >
              <div className="flex items-center justify-between p-5 border-b border-outline-variant">
                <h3 className="text-xl font-bold text-on-surface">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 overflow-y-auto custom-scrollbar">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
