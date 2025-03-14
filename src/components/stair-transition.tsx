"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState("");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Initialize prevPathname on first render
    if (prevPathname === "") {
      setPrevPathname(pathname);
      return;
    }

    // Only trigger animation when pathname actually changes
    if (pathname !== prevPathname) {
      // Start animation
      setShouldAnimate(true);
      
      // Reset animation state after transition completes
      const timer = setTimeout(() => {
        setPrevPathname(pathname);
        setShouldAnimate(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {shouldAnimate && (
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="fixed inset-0 z-50"
          >
            {/* Container for the stair bars */}
            <div className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen overflow-hidden">
              <div className="relative h-full w-full">
                <Stairs />
              </div>
            </div>
            
            {/* Background overlay that fades out after stairs animation */}
            <motion.div
              className="pointer-events-none fixed inset-0 z-40 h-screen w-screen bg-background"
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: 0,
                transition: { 
                  delay: 1, 
                  duration: 0.4, 
                  ease: "easeInOut" 
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
