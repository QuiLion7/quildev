"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoProps {
  imageUrl: string;
  imageClasses?: string;
  svgClasses?: string;
}

const Photo: React.FC<PhotoProps> = ({
  imageUrl,
  imageClasses,
  svgClasses,
}) => {
  return (
    <div className="relative -z-10 h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className={`absolute m-4 ${imageClasses}`}
        >
          <Image
            src={imageUrl}
            alt="Imagem descritiva"
            quality={100}
            fill
            className="h-full w-full rounded-full object-contain"
          />
        </motion.div>

        <motion.svg
          className={`${svgClasses}`}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/200/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#145fc8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 91 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
