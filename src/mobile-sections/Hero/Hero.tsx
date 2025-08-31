import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import button from "src/assets/hero/button.png";
import trump from "src/assets/hero/trump.png";
import logo from "src/assets/section1/logoTrump.png";
import styles from "./styles.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
  id: string;
}

const Hero: React.FC<Props> = ({ parentRef, id }) => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      logoRef.current,
      { x: 0, y: 0, scale: 1 },
      {
        x: "-98%",
        y: "-35%",
        scale: 0.4,

        scrollTrigger: {
          trigger: parentRef?.current,
          start: "top top",
          end: "top+=5%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={clsx(styles.container, "center")} id={id}>
      <img src={logo} ref={logoRef} className={styles.logo} />
      <h1 className={styles.description}>'' IT'S IDEALISTIC. IT'S WONDERFUL. IT'S A BEAUTIFUL THING</h1>
      <img className={styles.button} src={button} alt="button" />
      <h6 className={styles.contract}>
        Contract Addres:
        <br />
        0x5fb7F004657C89Ae98eD6B11AA0C96a9C9b2e41a
      </h6>
      <img src={trump} className={styles.trump} />
    </div>
  );
};

export default Hero;
