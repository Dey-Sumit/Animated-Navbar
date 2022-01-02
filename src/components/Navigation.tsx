import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul variants={navigationVariants}>
      {[...Array(5)].map((_, i) => (
        <MenuItem />
      ))}
    </motion.ul>
  );
};

export default Navigation;
