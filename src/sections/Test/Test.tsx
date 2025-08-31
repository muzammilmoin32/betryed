import React from "react";
import styles from "./styles.module.scss";
import { motion, LayoutGroup } from "framer-motion";
import clsx from "clsx";

const Test = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.root} onClick={() => setIsOpen(!isOpen)}>
      <LayoutGroup>
        <motion.div layout className={isOpen ? styles.gridContainer : styles.gridContainerReversed}>
          <motion.div layout className={styles.left}></motion.div>
          <motion.div layout className={clsx(styles.right, isOpen && styles.scaled)}></motion.div>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default Test;
