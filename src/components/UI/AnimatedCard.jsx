import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  hover = true,
  gradient = false,
  border = true
}) => {
  const baseClasses = "bg-white rounded-2xl shadow-lg";
  const borderClasses = border ? "border border-gray-100" : "";
  const gradientClasses = gradient ? "bg-gradient-to-br from-white to-gray-50" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { scale: 1.05, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" } : {}}
      className={`${baseClasses} ${borderClasses} ${gradientClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;