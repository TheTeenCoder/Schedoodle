import { motion } from "framer-motion";

export const FadeIn = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export const HoverLarge = (props: any) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.25 },
      }}
    >
      {props.children}
    </motion.div>
  );
};
