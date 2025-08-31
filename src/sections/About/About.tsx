import React from "react";
import { NavBar } from "../NavBar/NavBar";
import lab from "src/assets/about/lab.png";
import prof from "src/assets/about/profCripto.png";
import paper from "src/assets/about/paper.png";
import heading from "src/assets/about/heading.png";
import content from "src/assets/about/content.png";
import logoBetrayed from "src/assets/about/logoBetrayed.png";
import agendaPaper from "src/assets/about/agendaPaper.png";
import trumpAlien from "src/assets/about/trumpAlien.png";
import styles from "./styles.module.scss";
import { gsap } from "src/config/gsap";
import clsx from "clsx";
import ScrollDownButton from "src/components/ScrollDownButton/ScrollDownButton";
import { scrollToNextSection } from "src/utils/scrollTo";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export const About: React.FC<Props> = ({ parentRef }) => {
  const labRef = React.useRef<HTMLImageElement>(null);
  const profRef = React.useRef<HTMLImageElement>(null);
  const logoLeftRef = React.useRef<HTMLImageElement>(null);
  const logoMainRef = React.useRef<HTMLImageElement>(null);
  const logoPaperRef = React.useRef<HTMLImageElement>(null);
  const paperContentRef = React.useRef<HTMLDivElement>(null);
  const scrollBtnRef = React.useRef<HTMLImageElement>(null);

  // React.useEffect(() => {
  //   if (!parentRef?.current) return;
  //   const scrollTrigger = {
  //     trigger: parentRef.current,
  //     id: "section2",
  //     start: "top top",
  //     scrub: true,
  //     end: "bottom top",
  //     markers: false,
  //     snap: 1,
  //     toggleActions: "play none none reverse",
  //   };
  //   gsap.fromTo(
  //     [labRef.current],
  //     {
  //       scale: 1.3,
  //       transformOrigin: "bottom right",
  //     },
  //     { scale: 1, scrollTrigger, transformOrigin: "bottom right" }
  //   );
  //   gsap.fromTo(
  //     [profRef.current],
  //     {
  //       scale: 1.3,
  //       x: "-20%",
  //       transformOrigin: "top right",
  //     },
  //     { scale: 1, x: 0, transformOrigin: "top right", scrollTrigger }
  //   );
  //   gsap.fromTo(
  //     [logoLeftRef.current, scrollBtnRef.current],
  //     {
  //       opacity: 0,
  //     },
  //     { opacity: 1, scrollTrigger }
  //   );
  //   gsap.fromTo(
  //     [logoPaperRef.current],
  //     {
  //       opacity: 1,
  //     },
  //     { opacity: 0, scrollTrigger }
  //   );
  //   gsap.fromTo(
  //     [logoMainRef.current],
  //     {
  //       width: "50vh",
  //       top: "74%",
  //       right: "0%",
  //     },
  //     { width: "16%", top: "16%", right: "20%", scrollTrigger }
  //   );
  //   gsap.fromTo(
  //     [paperContentRef.current],
  //     {
  //       y: "14%",
  //     },
  //     { y: 0, scrollTrigger }
  //   );
  // }, []);

  return (
    <div className={styles.root}>
      <img src={agendaPaper} className={styles.agendaPaper} alt=" agenda paper" />
      <img src={trumpAlien} className={styles.trumpAlien} alt=" trump alien" />

      {/* <NavBar />
      <img className={styles.lab} src={lab} alt="lab" ref={labRef} />
      <img className={styles.prof} src={prof} alt="prof" ref={profRef} />
      <img className={styles.logoMainLeft} src={logoBetrayed} alt="logoMainLeft" ref={logoLeftRef} />
      <img className={styles.logoMain} src={logoBetrayed} alt="logoMain" ref={logoMainRef} />
      <div className={styles.about}>
        <img className={styles.logoPaper} src={logoBetrayed} alt="logoPaper" ref={logoPaperRef} />
        <img className={styles.paper} src={paper} alt="paper" />
        <div className={clsx(styles.contentWrapper, "center")} ref={paperContentRef}>
          <img className={styles.heading} src={heading} alt="heading" />
          <img className={styles.content} src={content} alt="content" />
        </div>
        <ScrollDownButton
          className={styles.scrollBtn}
          refObj={scrollBtnRef}
          onClick={(e) => scrollToNextSection(e, "#betrayalenomics")}
        />
      </div>  */}
    </div>
  );
};
