"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

// Type-safe wrapper for motion.div that works around type definition issues
const MotionDiv = motion.div as any;

export default MotionDiv;

// Usage in your components:
// import MotionDiv from "@/app/ui/MotionDiv";
// 
// <MotionDiv
//   className="your-classes"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
// >
//   {children}
// </MotionDiv>