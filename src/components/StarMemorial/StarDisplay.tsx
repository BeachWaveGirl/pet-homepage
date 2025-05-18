
import { ReactNode } from "react";
import { motion } from "framer-motion";
import StarCanvas from "./StarCanvas";

interface StarDisplayProps {
  children?: ReactNode;
}

const StarDisplay = ({ children }: StarDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-full h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden border border-gray-800 shadow-lg"
    >
      <StarCanvas />
      {children}
    </motion.div>
  );
};

export default StarDisplay;
