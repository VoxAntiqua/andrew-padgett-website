"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import MotionDiv from "@/app/ui/MotionDiv";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 flex items-center justify-center z-50"
          onClick={onClose}
        >
          {/* Overlay */}
          <MotionDiv
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content */}
          <MotionDiv
            className="bg-white shadow-lg max-w-sm w-full mx-4 p-4 z-10 relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <HiX size={24} />
            </button>
            {children}
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;