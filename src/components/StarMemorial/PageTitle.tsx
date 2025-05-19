
import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  description: string;
  lightMode?: boolean;
}

const PageTitle = ({ title, description, lightMode = false }: PageTitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 pt-24 mt-4" // Added pt-24 and mt-4 for spacing below the header
    >
      <h1 className={`font-playfair text-4xl md:text-5xl font-bold mb-6 ${lightMode ? "text-gray-800" : "text-white"}`}>
        {title}
      </h1>
      <p className={`text-xl ${lightMode ? "text-gray-600" : "text-gray-300"} max-w-2xl mx-auto`}>
        {description}
      </p>
    </motion.div>
  );
};

export default PageTitle;
