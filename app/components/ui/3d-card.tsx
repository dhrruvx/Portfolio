"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

export const Card3D = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const maxSize = Math.max(width, height);
    const rotationY = ((mouseX - width / 2) / maxSize) * 15;
    const rotationX = ((mouseY - height / 2) / maxSize) * -15;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-[1px] backdrop-blur-3xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      {...props}
    >
      <motion.div
        className="relative h-full w-full rounded-xl bg-black p-6"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 