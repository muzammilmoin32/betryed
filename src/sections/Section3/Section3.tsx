import styles from "./styles.module.css";
import pigeon from "src/assets/section1/pigeon.png";
import pigeon1 from "src/assets/section1/pigeon1.png";
import pigeon2 from "src/assets/section1/pigeon2.png";
import { NavBar } from "../NavBar/NavBar";
// import cloud from "src/assets/section3/cloud.png";
// import cloud1 from "src/assets/section3/cloud1.png";
import cloud5 from "src/assets/section3/cloud5.png";
import pepestonk from "src/assets/section3/pepestonk.png";
import profcripto from "src/assets/section3/profcripto.png";
import c12 from "src/assets/section3/C12.png";
import c13 from "src/assets/section3/C13.png";
import c19 from "src/assets/section3/C19.png";
import c20 from "src/assets/section3/C20.png";
import c22 from "src/assets/section3/C22.png";
import label1 from "src/assets/section3/label1.png";
import label2 from "src/assets/section3/label2.png";
import ScrollDownButton from "src/components/ScrollDownButton/ScrollDownButton";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { scrollToNextSection } from "src/utils/scrollTo";
import { useMediaQuery } from "src/hooks/useMediaQuery";

const Section3AnimatedState = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img src={cloud5} alt="Cloud" className={`${styles.cloud} ${styles.cloud5}`} />

      <div className={styles.birdsContainer}>
        <img src={pigeon} className={`${styles.bird} ${styles.bird1_animated}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird2_animated}`} />
        <img src={pigeon2} className={`${styles.bird} ${styles.bird3_animated}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird5_animated}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird6_animated}`} />
        <img src={pigeon2} className={`${styles.bird} ${styles.bird7_animated}`} />
      </div>
      <div className={styles.gridContainer}>
        <img src={c13} className={`${styles.gridImage} ${styles.gridImage6}`} />
        <img src={c22} className={`${styles.gridImage} ${styles.gridImage7}`} />
        <img src={c20} className={`${styles.gridImage} ${styles.gridImage8}`} />
        <img src={c19} className={`${styles.gridImage} ${styles.gridImage9}`} />
        <img src={c12} className={`${styles.gridImage} ${styles.gridImage10}`} />
        <img src={label1} className={`${styles.label} ${styles.label1}`} />
        <img src={label2} className={`${styles.label} ${styles.label2}`} />
      </div>

      <ScrollDownButton className={styles.scrolldown1} onClick={(e) => scrollToNextSection(e, "#launch")} />
    </div>
  );
};

const Section3WithoutAnimatedState = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img src={pepestonk} className={`${styles.pepestonk}`} />
      <img src={profcripto} className={styles.profcripto} />
      <div className={styles.birdsContainer}>
        <img src={pigeon} className={`${styles.bird} ${styles.bird1}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird2}`} />
        <img src={pigeon2} className={`${styles.bird} ${styles.bird3}`} />
        <img src={pigeon} className={`${styles.bird} ${styles.bird4}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird5}`} />
        <img src={pigeon1} className={`${styles.bird} ${styles.bird6}`} />
        <img src={pigeon2} className={`${styles.bird} ${styles.bird7}`} />
      </div>
      <div className={styles.gridContainer}>
        <img src={c19} className={`${styles.gridImage} ${styles.gridImage1}`} />
        <img src={c20} className={`${styles.gridImage} ${styles.gridImage2}`} />
        <img src={c13} className={`${styles.gridImage} ${styles.gridImage3}`} />
        <img src={c22} className={`${styles.gridImage} ${styles.gridImage4}`} />
        <img src={c12} className={`${styles.gridImage} ${styles.gridImage5}`} />
      </div>

      <ScrollDownButton className={styles.scrolldown} onClick={(e) => scrollToNextSection(e, "#launch")} />
    </div>
  );
};

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const Section3: React.FC<Props> = ({ parentRef }) => {
  const withoutAnimationRef = useRef<HTMLDivElement>(null);
  const withAnimationRef = useRef<HTMLDivElement>(null);

  const bird1Ref = useRef<HTMLImageElement>(null);
  const bird2Ref = useRef<HTMLImageElement>(null);
  const bird3Ref = useRef<HTMLImageElement>(null);
  const bird4Ref = useRef<HTMLImageElement>(null);
  const bird5Ref = useRef<HTMLImageElement>(null);
  const bird6Ref = useRef<HTMLImageElement>(null);
  const bird7Ref = useRef<HTMLImageElement>(null);

  const pepestonkRef = useRef<HTMLImageElement>(null);
  const profcriptoRef = useRef<HTMLImageElement>(null);
  const pepestonkRef1 = useRef<HTMLImageElement>(null);
  const profcriptoRef1 = useRef<HTMLImageElement>(null);

  const gridImage1Ref = useRef<HTMLImageElement>(null);
  const gridImage2Ref = useRef<HTMLImageElement>(null);
  const gridImage3Ref = useRef<HTMLImageElement>(null);
  const gridImage4Ref = useRef<HTMLImageElement>(null);
  const gridImage5Ref = useRef<HTMLImageElement>(null);

  const label1Ref = useRef<HTMLImageElement>(null);
  const label2Ref = useRef<HTMLImageElement>(null);

  const scrollDownRef = useRef<any>(null);
  const laptop = useMediaQuery("(max-width: 1450px)");

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: parentRef.current,
  //           id: "section2",
  //           start: "top top",
  //           scrub: true,
  //           end: "bottom top",
  //           markers: false,
  //           snap: 1,
  //           toggleActions: "play none none reverse",
  //         },
  //       })
  //       .to(withoutAnimationRef.current, {
  //         autoAlpha: 0,
  //         ease: "none",
  //       })
  //       .to(
  //         ".cloud-translate1",
  //         {
  //           ease: "none",
  //           x: 0,
  //           y: "-100%",
  //         },
  //         "<"
  //       )
  //       .to(
  //         ".cloud-translate2",
  //         {
  //           ease: "none",
  //           x: "-150%",
  //           y: "-100%",
  //         },
  //         "<"
  //       )
  //       .to(
  //         withAnimationRef.current,
  //         {
  //           ease: "none",
  //           autoAlpha: 1,
  //         },
  //         "<"
  //       );
  //   });

  //   return () => ctx.revert();
  // }, []);

  // bird1 - enlarge
  // bird2 - slide left little
  // bird3 - slide down
  // bird4 - fade out
  // bird5 - enlarge and move left a little
  // bird6 - slide down and move right, get big
  // bird7 - slide up and enlarge

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        .to(
          ".cloud-translate1",
          {
            ease: "none",
            x: 0,
            y: "-100%",
          },
          "<"
        )
        .to(
          ".cloud-translate2",
          {
            ease: "none",
            x: "-150%",
            y: "-100%",
          },
          "<"
        )
        .to(
          ".cloud-fade",
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          bird1Ref.current,
          {
            scale: 1.2,
            y: -10,
          },
          "<"
        )
        .to(
          bird2Ref.current,
          {
            x: 20,
            scale: 0.9,
          },
          "<"
        )
        .to(
          bird3Ref.current,
          {
            y: 50,
            scale: 0.9,
          },
          "<"
        )
        .to(
          bird4Ref.current,
          {
            opacity: 0,
          },
          "<"
        )
        .to(
          bird5Ref.current,
          {
            scale: 1.2,
            x: -120,
          },
          "<"
        )
        .to(
          bird6Ref.current,
          {
            y: 120,
            x: 60,
            scale: 1.2,
          },
          "<"
        )
        .to(
          bird7Ref.current,
          {
            y: -40,
            scale: 1.2,
          },
          "<"
        )
        .to(
          profcriptoRef.current,
          {
            opacity: 0,
          },
          "<"
        )
        .to(
          profcriptoRef1.current,
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          pepestonkRef.current,
          {
            opacity: 0,
          },
          "<"
        )
        .to(
          pepestonkRef1.current,
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          gridImage3Ref.current,
          {
            // left: "0",
            top: laptop ? "140%" : "100%",
            // scale: 1.5,
          },
          "<"
        )
        .to(
          gridImage1Ref.current,
          {
            top: "-50%",
            left: "30.5%",
            scale: 0.8,
          },
          "<"
        )
        .to(
          gridImage2Ref.current,
          {
            // left: "58.5%",
            top: laptop ? "140%" : "100%",
          },
          "<"
        )
        .to(
          gridImage4Ref.current,
          {
            top: "-70%",
            // left: "58.5%",
          },
          "<"
        )
        .to(
          gridImage5Ref.current,
          {
            left: "95%",
          },
          "<"
        )
        .to(
          [label1Ref.current, label2Ref.current],
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          scrollDownRef.current,
          {
            x: "100%",
            scale: 1.4,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.root}>
      {/* <NavBar /> */}
      <div className={`${styles.main}`}>
        {/* <img src={cloud} alt="Cloud" className={`${styles.cloud} ${styles.cloud1} cloud-translate1`} />
        <img src={cloud1} alt="Cloud" className={`${styles.cloud} ${styles.cloud2} cloud-translate2`} />
        <img
          src={cloud5}
          alt="Cloud"
          className={`${styles.cloud} ${styles.cloud5} cloud-fade`}
          style={{
            opacity: 0,
          }}
        /> */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* <img src={pepestonk} className={`${styles.pepestonk}`} ref={pepestonkRef} /> */}
          {/* <img src={profcripto} className={styles.profcripto} ref={profcriptoRef} /> */}
          {/* <img src={pepestonk} className={`${styles.pepestonk1}`} style={{ opacity: 0 }} ref={pepestonkRef1} /> */}
          {/* <img src={profcripto} className={styles.profcripto1} style={{ opacity: 0 }} ref={profcriptoRef1} /> */}
          {/* <div className={styles.birdsContainer}>
            <img src={pigeon} className={`${styles.bird} ${styles.bird1}`} ref={bird1Ref} />
            <img src={pigeon1} className={`${styles.bird} ${styles.bird2}`} ref={bird2Ref} />
            <img src={pigeon2} className={`${styles.bird} ${styles.bird3}`} ref={bird3Ref} />
            <img src={pigeon} className={`${styles.bird} ${styles.bird4}`} ref={bird4Ref} />
            <img src={pigeon1} className={`${styles.bird} ${styles.bird5}`} ref={bird5Ref} />
            <img src={pigeon1} className={`${styles.bird} ${styles.bird6}`} ref={bird6Ref} />
            <img src={pigeon2} className={`${styles.bird} ${styles.bird7}`} ref={bird7Ref} />
          </div> */}
          <div className={styles.gridContainer}>
            <img src={c19} className={`${styles.gridImage} ${styles.gridImage1}`} />
            <img src={c20} className={`${styles.gridImage} ${styles.gridImage2}`} ref={gridImage2Ref} />
            <img src={c13} className={`${styles.gridImage} ${styles.gridImage3}`} ref={gridImage3Ref} />
            <img src={c22} className={`${styles.gridImage} ${styles.gridImage4}`} ref={gridImage4Ref} />
            <img src={c12} className={`${styles.gridImage} ${styles.gridImage5}`} />
            <img src={label1} className={`${styles.label} ${styles.label1}`} ref={label1Ref} style={{ opacity: 0 }} />
            <img src={label2} className={`${styles.label} ${styles.label2}`} ref={label2Ref} style={{ opacity: 0 }} />
          </div>
          {/* 
          <ScrollDownButton
            className={styles.scrolldown}
            onClick={(e) => scrollToNextSection(e, "#launch")}
            refObj={scrollDownRef}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;
