import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import overlayimage from "src/assets/watchyourhead/overlayimage.png";
import { NavBar } from "../NavBar/NavBar";
import card1 from "src/assets/watchyourhead/card1.png";
import card2 from "src/assets/watchyourhead/card2.png";
import card3 from "src/assets/watchyourhead/card3.png";
import card4 from "src/assets/watchyourhead/card4.png";
import dialog1 from "src/assets/watchyourhead/dialog1.png";
import dialog2 from "src/assets/watchyourhead/dialog2.png";
import dialog3 from "src/assets/watchyourhead/dialog3.png";
import dialog4 from "src/assets/watchyourhead/dialog4.png";
import getbetrayedbtn from "src/assets/section3/getbetrayedbtn.png";
import { gsap } from "gsap";
import { pinksaleLink } from "src/config/constants";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const WatchYourHead: React.FC<Props> = ({ parentRef }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const dialogRef1 = React.useRef<HTMLImageElement>(null);
  const dialogRef2 = React.useRef<HTMLImageElement>(null);
  const dialogRef3 = React.useRef<HTMLImageElement>(null);
  const dialogRef4 = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          id: "section2",
          start: "top top",
          scrub: true,
          end: "bottom top",
          markers: false,
          snap: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to(rootRef.current, {
        backgroundSize: "100% 200%",
      })
      .to(
        titleContainerRef.current,
        {
          x: -10,
          y: -10,
          ease: "none",
        },
        "<"
      )
      .to(dialogRef1.current, {
        y: "-93%",
        zIndex: 10,
        opacity: 1,
      })
      .to(dialogRef2.current, {
        y: "-93%",
        zIndex: 10,
        opacity: 1,
      })
      .to(dialogRef3.current, {
        y: "-93%",
        zIndex: 10,
        opacity: 1,
      })
      .to(dialogRef4.current, {
        y: "-153%",
        opacity: 1,
        zIndex: 10,
      });
  }, []);

  return (
    <div className={styles.root} ref={rootRef}>
      {/* <NavBar /> */}
      <div className={styles.main}>
        <div style={{ position: "relative" }}></div>
        <img src={overlayimage} className={styles.overlayimage} />
        <div className={styles.titleContainer} ref={titleContainerRef}>
          <h1 className={styles.title}>Building The Trump Agenda</h1>
          <h4 className={styles.subtitle}>Powering the future, making crypto great again</h4>
        </div>
        <div className={styles.cardContainer}>
          <span className={styles.card}>
            <img src={dialog1} className={styles.dialog} ref={dialogRef1} />
            <img src={card1} />
            <span className={styles.kmc}>0K MC</span>
          </span>
          <span className={styles.card}>
            <img src={dialog2} className={styles.dialog} ref={dialogRef2} />
            <img src={card2} />
            <span className={styles.kmc}>0K MC</span>
          </span>
          <span className={styles.card}>
            <img src={dialog3} className={styles.dialog} ref={dialogRef3} />
            <img src={card3} />
            <span className={styles.kmc}>500K MC</span>
          </span>
          <span className={styles.card}>
            <img src={dialog4} className={styles.dialog} ref={dialogRef4} />
            <img src={card4} />
            <span className={styles.kmc}>2M MC</span>
          </span>

          {/* <img src={card5} className={styles.card} /> */}
        </div>
        {/* <button
          className={styles.getbetrayedbtn}
          onClick={() => window.open(pinksaleLink, "_blank")}
          style={{
            cursor: "pointer",
          }}
        >
          <img src={getbetrayedbtn} />
        </button> */}
      </div>
    </div>
  );
};

export default WatchYourHead;
