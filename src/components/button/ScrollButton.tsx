import { motion } from "framer-motion";

interface ScrollButtonProps {
  onClick: () => void;
  title: string;
}

function ScrollButton({ onClick, title }: ScrollButtonProps) {
  return (
    <motion.button
      className="fixed right-5 sm:right-auto bottom-5 left-1/2 sm:!-translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.button>
  );
}
export default ScrollButton;
