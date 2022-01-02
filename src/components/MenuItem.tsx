import { motion, Variants } from "framer-motion";

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,

      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const MenuItem = () => {
  return (
    <motion.li variants={menuItemVariants}>
      <span className="icon-placeholder"></span>
      <span className="text-placeholder"></span>
    </motion.li>
  );
};

export default MenuItem;
