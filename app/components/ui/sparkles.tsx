"use client";

import React from "react";
import { cn } from "@/app/utils/cn";
import { motion } from "framer-motion";

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const sparkles = Array.from({ length: 20 });
  const random = () => Math.floor(Math.random() * 100);
  
  return (
    <div className={cn("relative", className)} {...props}>
      {sparkles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 bg-blue-400 rounded-full"
          style={{
            left: `${random()}%`,
            top: `${random()}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </div>
  );
}; 