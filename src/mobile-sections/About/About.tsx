import React from "react";
import agendaPaper from "src/assets/about/agendaPaper.png";
import trumpAlien from "src/assets/about/trumpAlien.png";
import styles from "./styles.module.scss";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export const About: React.FC<Props> = ({ parentRef }) => {
  return (
    <div className={styles.root}>
      <img src={agendaPaper} className={styles.agendaPaper} alt=" agenda paper" />
      <img src={trumpAlien} className={styles.trumpAlien} alt=" trump alien" />
    </div>
  );
};
