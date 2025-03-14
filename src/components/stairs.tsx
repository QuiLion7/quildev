import React from "react";
import { motion } from "framer-motion";

const Stairs = () => {
  return (
    <div className="flex h-full w-full">
      {[...Array(7)].map((_, index) => {
        const reverseIndex = 6 - index;
        
        return (
          <div 
            key={index} 
            className="relative h-full" 
            style={{ width: `${100 / 7}%` }}
          >
            <motion.div
              className="absolute h-full w-full bg-primary"
              initial={{ top: "100%" }}
              animate={{ top: "0%" }}
              exit={{ top: "100%" }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex * 0.1,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stairs;
