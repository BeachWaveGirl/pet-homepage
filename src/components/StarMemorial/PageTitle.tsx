
import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
        {title}
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default PageTitle;
