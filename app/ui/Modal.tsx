import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return createPortal(
    React.createElement(
      AnimatePresence,
      null,
      isOpen &&
        React.createElement(
          "div",
          { className: "fixed inset-0 flex items-center justify-center z-50" },
          // Overlay
          React.createElement(motion.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            className: "fixed inset-0 bg-black bg-opacity-50",
            onClick: onClose,
          }),
          // Content
          React.createElement(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9, y: 0 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 0 },
              transition: { duration: 0.3 },
              className: "bg-white shadow-lg max-w-sm w-full mx-4 p-4 z-10 relative",
              onClick: (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(),
            },
            // Children of content
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "button",
                {
                  className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700",
                  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    onClose();
                  },
                },
                React.createElement(HiX, { size: 24 })
              ),
              children
            )
          )
        )
    ),
    document.body
  );
};

export default Modal;
