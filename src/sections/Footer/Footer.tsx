import React from "react";
import bg from "src/assets/footer/bg.png";
import styles from "./styles.module.scss";
import content from "src/assets/footer/content.png";
import betrayed from "src/assets/footer/trumpepe.png";
import getbetrayednow from "src/assets/footer/trumpnow.png";
import Socials from "src/components/Socials/Socials";
import { gsap } from "src/config/gsap";
import { pinksaleLink } from "src/config/constants";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}
const Footer: React.FC<Props> = ({ parentRef }) => {
  const paraRef = React.useRef<HTMLParagraphElement>(null);
  const socialsRef = React.useRef<HTMLDivElement>(null);

  const zoomIn = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    gsap.to(e.target, {
      scale: 1.2,
    });
  };

  const zoomOut = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    gsap.to(e.target, {
      scale: 1,
    });
  };

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
      paraRef.current,
      { y: 0 },
      {
        y: -20,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      socialsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger,
      }
    );
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg}),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }}
      className={styles.container}
    >
      <div className={styles.content}>
        <img style={{ paddingLeft: "120px" }} src={getbetrayednow} className={styles.getbetrayednow} />
        <img
          src={betrayed}
          onMouseOver={zoomIn}
          onMouseLeave={zoomOut}
          style={{
            cursor: "pointer",
          }}
          // onClick={() => window.open(pinksaleLink, "_blank")}
        />
      </div>
      {/* <img src={content} className={styles.content} /> */}
      {/* <p ref={paraRef} className={styles.text}>
        We won't take responsibility if you get lured in, your new job is simply to lure more people in to have a chance
        of survival.
      </p> */}
      <Socials refObj={socialsRef} className={styles.socials} />
    </div>
  );
};

export default Footer;
