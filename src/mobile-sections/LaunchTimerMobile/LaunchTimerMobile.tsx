import React from "react";
import electionHeading from "src/assets/section3/electionheading.svg";
import styles from "./styles.module.css";
// import getbetrayedbtn from "src/assets/section3/getbetrayedbtn.png";
// import betrayedlogo from "src/assets/section3/betrayedlogo.png";
import { gsap } from "src/config/gsap";
import { useCountdown } from "src/hooks/useCountdown";
// import ScrollDownButton from "src/components/ScrollDownButton/ScrollDownButton";
import { presaleStartTime, pinksaleLink } from "src/config/constants";
// import { scrollToNextSection } from "src/utils/scrollTo";

import button from "src/assets/hero/button.png";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const LaunchTimer: React.FC<Props> = ({ parentRef }) => {
  const { timeLeft } = useCountdown(presaleStartTime);
  return (
    <div className={styles.launch}>
      <div className={styles.titleContainer}>
        <img src={electionHeading} alt="Launch title" className={styles.title} />
        {/* <br /> */}
        <h1> Fair Launch Presale </h1>
      </div>
      {/* <img src={betrayedlogo} alt="Betrayed Logo" className={styles.logo}  /> */}
      <div className={styles.countdownContainer}>
        <div className={styles.countdown}>
          <span className={styles.countdownNumber}>{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className={styles.countdown}>
          <span className={styles.countdownNumber}>{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className={styles.countdown}>
          <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
          <span>Mins</span>
        </div>
        <div className={styles.countdown}>
          <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
          <span>Secs</span>
        </div>
      </div>
      {/* <button
        className={styles.getbetrayedbtn}
        onClick={() => window.open(pinksaleLink, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <img src={getbetrayedbtn} />
      </button> */}
      {/* <ScrollDownButton
        refObj={scrollBtnRef}
        className={styles.scrolldownBtn}
        onClick={(e) => scrollToNextSection(e, "#trailer")}
      /> */}
      <img src={button} className={styles.button} alt="button" />
    </div>
  );
};

export default LaunchTimer;
