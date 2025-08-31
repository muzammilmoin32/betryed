import React from "react";
import scrollDownButton from "src/assets/scrolldown.png";
import styles from "./styles.module.css";

interface ScrollDownButtonProps {
  className?: string;
  refObj?: React.MutableRefObject<HTMLImageElement | null>;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ className, refObj, onClick }) => {
  return <img className={`${className} ${styles.btn}`} onClick={onClick} src={scrollDownButton} alt="" ref={refObj} />;
};

export default ScrollDownButton;
