import { FC, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import pepeStonk from "src/assets/betrayalNomics/pepeStonk.png";
import { gsap } from "src/config/gsap";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export const BetrayalNomics: FC<Props> = ({ parentRef }) => {
  const pepeStonkRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      [pepeStonkRef.current],
      { translateY: 0 },
      {
        translateY: "-16%",
        transformOrigin: "bottom right",
        scrollTrigger,
      }
    );
    gsap.fromTo(
      [textRef.current],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger,
      }
    );
  }, []);

  return (
    <div className={styles.root}>
      <img className={styles.pepeStonk} src={pepeStonk} alt="pepeStonk" ref={pepeStonkRef} />
      <h2 className={styles.heading}>trumpnomics</h2>
      <div className={styles.sale}>
        <p className={styles.percentage}>0%</p>
        <p className={styles.percentage}>3%</p>
      </div>
      <p className={styles.helperText}>BUY/SELL</p>
      <div ref={textRef}>
        <p className={styles.description}>
          Here at the Trump Agenda, we're all about community-driven action, and that means keeping a close eye on every
          <br />
          <br />
          move our team makes. In the spirit of transparency and fairness, we're thrilled to announce a game-changing
          <br />
          <br />
          feature: a whopping 0% tax on all buy and sell transactions! That's right – no sneaky fees or hidden charges
          <br />
          <br />
          here. Just pure, unadulterated crypto excitement. Stay glued to your screens for more thrilling announcements
          and updates as we continue to shake up the crypto world in the most epic way possible!
        </p>
      </div>
    </div>
  );
};
