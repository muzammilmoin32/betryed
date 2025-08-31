import clsx from "clsx";
import React from "react";
import button from "src/assets/hero/button.png";
import bg from "src/assets/hero/herobgNew.png";
import trump from "src/assets/hero/trump.png";
import logo from "src/assets/section1/logoTrump.png";
import { gsap } from "src/config/gsap";
import styles from "./styles.module.scss";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const Hero: React.FC<Props> = ({ parentRef }) => {
  const logo1Ref = React.useRef<HTMLImageElement>(null);
  const logo2Ref = React.useRef<HTMLImageElement>(null);
  const logoRef = React.useRef<HTMLImageElement>(null);
  const trumpRef1 = React.useRef<HTMLImageElement>(null);
  const trumpRef2 = React.useRef<HTMLImageElement>(null);
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const bubbleRef = React.useRef<HTMLImageElement>(null);
  const bgRef = React.useRef<HTMLImageElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const descRef = React.useRef<HTMLDivElement>(null);
  const buttonRef1 = React.useRef<HTMLImageElement>(null);
  const buttonRef2 = React.useRef<HTMLImageElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // function zoomIn(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
  //   gsap.to(e.target, {
  //     scale: 1.2,
  //   });
  // }
  // function zoomOut(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
  //   gsap.to(e.target, {
  //     scale: 1,
  //   });
  // }

  React.useEffect(() => {
    if (!parentRef?.current) return;

    const scrollTrigger = {
      trigger: parentRef.current,
      id: "home",
      start: "top top",
      scrub: true,
      end: "top+=40%",
      markers: false,
      snap: 1,
      toggleActions: "play none none reverse",
    };
    gsap.fromTo(
      contentRef.current,

      { x: "8%", y: "-1%", scale: 0.8 },
      {
        x: 0,
        y: "0",
        scale: window.innerWidth < 1460 ? 0.9 : 1,

        scrollTrigger,
      }
    );

    // translate(14%, 6%) scale(0.8)
    // gsap.fromTo(
    //   [logoRef.current, headingRef.current],

    //   { x: "5vw", y: "-16vh", scale: 0.5 },
    //   {
    //     x: 0,
    //     y: "-8vh",
    //     scale: 1,
    //             ease: "elastic.out(0.3, 0.2)",

    //     scrollTrigger,
    //   }
    // );

    // gsap.fromTo(
    //   [trumpRef.current, headingRef.current],

    //   { x: "0%" },
    //   {
    //     x: "-20%",
    //     ease: "elastic.out(0.3, 0.2)",

    //     scrollTrigger,
    //     duration: 1.5,
    //   }
    // );
    // gsap.fromTo(
    //   bubbleRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     scrollTrigger,
    //     onStart: () => {
    //       bubbleRef.current.style.visibility = "visible";
    //     },
    //   }
    // );
    gsap.fromTo(logo2Ref.current, { width: "25%" }, { width: "26%", scrollTrigger });

    // gsap.fromTo(logo2Ref.current, { opacity: "1" }, { opacity: "0", duration: 1.2, scrollTrigger });
    // gsap.fromTo(logo1Ref.current, { opacity: "0" }, { opacity: "1", duration: 1.2, scrollTrigger });
    // gsap.fromTo(buttonRef1.current, { opacity: "1" }, { opacity: "0", duration: 1.2, scrollTrigger });
    // gsap.fromTo(buttonRef2.current, { opacity: "0" }, { opacity: "1", duration: 1.2, scrollTrigger });
    // gsap.fromTo(trumpRef2.current, { opacity: "0" }, { opacity: "1", duration: 1.2, scrollTrigger });
    // gsap.fromTo(contractRef.current, { opacity: "1" }, { opacity: "0", duration: 1.2, scrollTrigger });

    gsap.fromTo(trumpRef1.current, { x: "40%", width: "25%" }, { x: "0%", width: "36%", scrollTrigger });
    gsap.fromTo(
      bgRef.current,
      { x: 10, y: 10, scale: 1.2 },
      {
        x: 0,
        y: 0,
        scale: 1.2,
        // ease: "elastic.out(1, 0.5)",
        // duration: 1.2,

        scrollTrigger,
      }
    );
    // gsap.fromTo(
    //   descRef.current,
    //   { x: window.innerWidth > 1460 ? "24%" : "32%", y: "-208%" },
    //   {
    //     x: 0,
    //     y: 0,
    //     // ease: "elastic.out(1, 0.5)",
    //     // duration: 1.2,
    //     scrollTrigger,
    //   }
    // );translate(14%, 6%) scale(0.8)
  }, []);

  return (
    <div ref={containerRef} /*style={{ backgroundImage: `url(${bg})` }}*/ className={clsx(styles.container, "center")}>
      <img src={bg} ref={bgRef} className={styles.background} alt="background image" />
      <img ref={trumpRef1} src={trump} className={styles.trump1} />
      {/* <img ref={trumpRef2} src={trump} className={styles.trump2} /> */}
      {/* <img ref={logo1Ref} src={logo} className={styles.logo1} /> */}
      <div className={styles.content} ref={contentRef}>
        <img ref={logo2Ref} src={logo} className={styles.logo2} />
        <h1 ref={descRef} className={styles.description}>
          '' IT'S IDEALISTIC. IT'S WONDERFUL. $TRUMPPEPE , THE NEXT $MAGA & $PEPE{" "}
        </h1>
        <img ref={buttonRef1} className={styles.button1} src={button} alt="button" />
        <h6 className={styles.contract}>
          Contract Addres:
          <br />
          0x5fb7F004657C89Ae98eD6B11AA0C96a9C9b2e41a
        </h6>
      </div>
      {/* <img ref={buttonRef2} className={styles.button2} src={button} alt="button" /> */}
    </div>
  );
};

export default Hero;
