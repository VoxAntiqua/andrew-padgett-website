import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Correct type for motion.div
  const overlayProps: HTMLMotionProps<"div"> = {
    className: "fixed inset-0 bg-black bg-opacity-50",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  const contentProps: HTMLMotionProps<"div"> = {
    className: "bg-white shadow-lg max-w-sm w-full mx-4 p-4 z-10 relative",
    initial: { opacity: 0, scale: 0.9, y: 0 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 0 },
    transition: { duration: 0.3 },
    onClick: (e) => e.stopPropagation(),
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div {...overlayProps} />
          <motion.div {...contentProps}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <HiX size={24} />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;