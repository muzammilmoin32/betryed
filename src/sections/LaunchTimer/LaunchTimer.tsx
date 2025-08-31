import React from "react";
import electionHeading from "src/assets/section3/electionheading.svg";
import styles from "./styles.module.css";
// import getbetrayedbtn from "src/assets/section3/getbetrayedbtn.png";
// import betrayedlogo from "src/assets/section3/betrayedlogo.png";
import { gsap } from "src/config/gsap";
import { useCountdown } from "src/hooks/useCountdown";
// import ScrollDownButton from "src/components/ScrollDownButton/ScrollDownButton";
import { presaleStartTime } from "src/config/constants";
// import { scrollToNextSection } from "src/utils/scrollTo";

import button from "src/assets/hero/button.png";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const LaunchTimer: React.FC<Props> = ({ parentRef }) => {
  const { timeLeft } = useCountdown(presaleStartTime);
  const daysRef = React.useRef<HTMLDivElement>(null);
  const minsRef = React.useRef<HTMLDivElement>(null);
  const hoursRef = React.useRef<HTMLDivElement>(null);
  const secondsRef = React.useRef<HTMLDivElement>(null);
  // const logoRef = React.useRef<HTMLImageElement>(null);
  // const scrollBtnRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (!parentRef?.current) return;
    const scrollTrigger = {
      trigger: parentRef.current,
      id: "section2",
      start: "top top",
      scrub: true,
      end: "bottom top",
      markers: false,
      snap: 1,
      toggleActions: "play none none reverse",
    };
    gsap.fromTo(
      [daysRef.current, minsRef.current],
      { y: 0 },
      {
        y: 50,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      [hoursRef.current, secondsRef.current],
      { y: 0 },
      {
        y: -50,
        scrollTrigger,
      }
    );
    // gsap.fromTo(
    //   [logoRef.current],
    //   { scale: 1 },
    //   {
    //     scale: 1.5,
    //     transformOrigin: "top",
    //     scrollTrigger,
    //   }
    // );
    // gsap.fromTo(
    //   [scrollBtnRef.current],
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     scrollTrigger: {
    //       ...scrollTrigger,
    //       scrub: true,
    //     },
    //     duration: 0.3,
    //   }
    // );
  }, []);

  return (
    <div className={styles.launch}>
      <div className={styles.titleContainer}>
        <img src={electionHeading} alt="Launch title" className={styles.title} />
        {/* <br /> */}
        <h1> Fair Launch Presale </h1>
      </div>

      {/* <img src={betrayedlogo} alt="Betrayed Logo" className={styles.logo} ref={logoRef} /> */}
      <div className={styles.countdownContainer}>
        <div className={styles.countdown} ref={daysRef}>
          <span className={styles.countdownNumber}>{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className={styles.countdown} ref={hoursRef}>
          <span className={styles.countdownNumber}>{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className={styles.countdown} ref={minsRef}>
          <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
          <span>Mins</span>
        </div>
        <div className={styles.countdown} ref={secondsRef}>
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
