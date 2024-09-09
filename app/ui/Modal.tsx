// ui/Modal.tsx

import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="bg-white shadow-lg max-w-sm w-full p-4 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
