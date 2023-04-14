import { motion } from "framer-motion";

export default function Layout({ className, children }) {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.main>
  )
}