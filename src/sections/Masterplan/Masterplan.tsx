import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import betrayedLogo from "../../assets/section1/logoTrump.png";
import quote1 from "../../assets/masterplan/quote-bait.png";
import quote2 from "../../assets/masterplan/quote-lure.png";
import quote3 from "../../assets/masterplan/quote-trap.png";
import quote4 from "../../assets/masterplan/quote-betrayal.png";
import { gsap } from "gsap";
interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}
const Masterplan: React.FC<Props> = ({ parentRef }) => {
  const quoteRef1 = React.useRef<HTMLImageElement>(null);
  const quoteRef2 = React.useRef<HTMLImageElement>(null);
  const quoteRef3 = React.useRef<HTMLImageElement>(null);
  const quoteRef4 = React.useRef<HTMLImageElement>(null);
  useEffect(() => {
    const animationOptions = {
      scrollTrigger: {
        trigger: parentRef.current,
        id: "section2",
        start: "top top",
        scrub: false,
        end: "bottom top",
        markers: false,
        snap: 1,
        toggleActions: "play none none reverse",
      },
    };

    gsap.fromTo(
      quoteRef1.current,
      {
        y: "-193%",
        zIndex: 10,
        opacity: 0,
      },
      {
        ...animationOptions,
        y: "0%",
        opacity: 1,
        start: "top 50%",
      }
    );

    gsap.fromTo(
      quoteRef2.current,
      {
        y: "-193%",
        zIndex: 10,
        opacity: 0,
      },
      {
        ...animationOptions,
        y: "0%",
        opacity: 1,
        start: "top 0%",
      }
    );

    gsap.fromTo(
      quoteRef3.current,
      {
        y: "-193%",
        zIndex: 10,
        opacity: 0,
      },
      {
        ...animationOptions,
        y: "0%",
        opacity: 1,
        start: "top 20%",
      }
    );

    gsap.fromTo(
      quoteRef4.current,
      {
        y: "-193%",
        zIndex: 10,
        opacity: 0,
      },
      {
        ...animationOptions,
        y: "0%",
        opacity: 1,
        start: "top 20%",
      }
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={betrayedLogo} alt="Betrayed Logo" className={styles.logo} />
        <div className={styles.content}>
          <h1>FEATURES</h1>
          <div className={styles.quotesContainer}>
            <img src={quote1} ref={quoteRef1} alt="Quote 1" />
            <img src={quote2} ref={quoteRef2} alt="Quote 2" />
            <img src={quote3} ref={quoteRef3} alt="Quote 3" />
            <img src={quote4} ref={quoteRef4} alt="Quote 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masterplan;
