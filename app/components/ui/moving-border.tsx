"use client";

import React from "react";
import { cn } from "@/app/utils/cn";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "100%",
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg blur-xl opacity-50 animate-border" />
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
}; 