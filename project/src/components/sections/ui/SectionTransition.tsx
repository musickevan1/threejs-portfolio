import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionTransitionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const SectionTransition = ({ children, ...props }: SectionTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-matrix-500"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;