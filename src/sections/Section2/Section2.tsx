import { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import professorImg from "../../assets/section2/professor.png";
import professorImgAA from "../../assets/section2/professor2.png";
import computerImg from "../../assets/section2/computer-with-logo.png";
import comic1 from "../../assets/section2/comic-first.png";
import comic1AA from "../../assets/section2/comic-first-AA.png";
import comic2 from "../../assets/section2/comic-second-AA.png";
import comic2AA from "../../assets/section2/comic-second.png";
import comic3 from "../../assets/section2/comic-third.png";
import comic4 from "../../assets/section2/comic-fourth.png";
import comic5 from "../../assets/section2/comic-fifth.png";
import comic6 from "../../assets/section2/comic-sixth.png";
import comic7 from "../../assets/section2/comic-seventh.png";
import scrollBtn from "../../assets/section2/scroll-down-btn.png";
import bottomText from "../../assets/section2/bottomText.png";
import { gsap } from "../../config/gsap";
import { scrollToNextSection } from "src/utils/scrollTo";

type Props = {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
};
const Section2 = ({ parentRef }: Props) => {
  // here adding AA with assets name means after animation assets
  const containerRef = useRef<HTMLDivElement>(null);
  const bgPattern1Ref = useRef<HTMLDivElement>(null);
  const bgPattern2Ref = useRef<HTMLDivElement>(null);
  const professorRef = useRef<HTMLImageElement>(null);
  const professorRefAA = useRef<HTMLImageElement>(null);
  const computerRef = useRef<HTMLImageElement>(null);
  const comic1Ref = useRef<HTMLImageElement>(null);
  const comic1RefAA = useRef<HTMLImageElement>(null);
  const comic2Ref = useRef<HTMLImageElement>(null);
  const comic2RefAA = useRef<HTMLImageElement>(null);
  const comic3Ref = useRef<HTMLImageElement>(null);
  const comic4Ref = useRef<HTMLImageElement>(null);
  const comic5Ref = useRef<HTMLImageElement>(null);
  const comic6Ref = useRef<HTMLImageElement>(null);
  const comic7Ref = useRef<HTMLImageElement>(null);
  const scrollBtnRef = useRef<HTMLImageElement>(null);
  const bottomTextRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const scrollTrigger = {
      trigger: parentRef?.current,
      id: "section2",
      start: "top top",
      scrub: true,
      end: "bottom top",
      markers: false,
      snap: 1,
      toggleActions: "play none none reverse",
    };
    // gsap.to([bgPattern1Ref?.current], { rotate: 180, scrollTrigger });
    // gsap.to([bgPattern2Ref?.current], { rotate: -180, scrollTrigger });
    // gsap.to([professorRef?.current], { opacity: 0, scrollTrigger });
    // gsap.to([professorRefAA?.current], { opacity: 1, scrollTrigger });
    // gsap.to([computerRef?.current], {
    //   left: "65%",
    //   width: "50%",
    //   bottom: "-10%",
    //   height: "100%",
    //   scrollTrigger,
    // });
    gsap.to([comic1Ref?.current], { opacity: 0, top: "15%", left: "-4%", scrollTrigger });
    gsap.to([comic1RefAA?.current], { opacity: 1, scrollTrigger });
    gsap.to([comic2Ref?.current], { opacity: 0, scrollTrigger });
    gsap.to([comic2RefAA?.current], { opacity: 1, scrollTrigger });
    gsap.to([comic3Ref?.current], { left: "-6%", bottom: "-8%", height: "80%", scrollTrigger });
    gsap.to([comic4Ref?.current], { bottom: "-1%", right: "-7%", width: "37%", height: "37%", scrollTrigger });
    gsap.to([comic5Ref?.current], { right: "-4%", scrollTrigger });
    gsap.to([comic6Ref?.current], { left: "34%", bottom: "-1%", scrollTrigger });
    gsap.to([comic7Ref?.current], { bottom: "38%", right: "34%", scrollTrigger });
    // gsap.to([scrollBtnRef?.current], { width: "20%", height: "10%", bottom: "-5%", right: "-1%", scrollTrigger });
    gsap.to([bottomTextRef?.current], { opacity: 1, scrollTrigger });
  }, []);

  return (
    <div className={styles.root} ref={containerRef}>
      {/* <div className={`${styles.bg} ${styles.chemical_pattern_1}`} ref={bgPattern1Ref} /> */}
      {/* <div className={`${styles.bg} ${styles.chemical_pattern_2}`} ref={bgPattern2Ref} /> */}
      {/* <img src={professorImg} className={styles.professorImg} ref={professorRef} /> */}
      {/* <img src={professorImgAA} className={styles.professorImgAA} ref={professorRefAA} /> */}
      {/* <img src={computerImg} className={styles.computerImg} ref={computerRef} /> */}
      <div className={styles.comicContainer}>
        <img src={comic1} className={styles.comic_1} ref={comic1Ref} />
        <img src={comic1AA} className={styles.comic_1_AA} ref={comic1RefAA} />
        <img src={comic2} className={styles.comic_2} ref={comic2Ref} />
        <img src={comic2AA} className={styles.comic_2_AA} ref={comic2RefAA} />
        <img src={comic3} className={styles.comic_3} ref={comic3Ref} />
        <img src={comic4} className={styles.comic_4} ref={comic4Ref} />
        <img src={comic5} className={styles.comic_5} ref={comic5Ref} />
        <img src={comic6} className={styles.comic_6} ref={comic6Ref} />
        <img src={comic7} className={styles.comic_7} ref={comic7Ref} />
        {/* <button onClick={(e) => scrollToNextSection(e, "#section3")}>
          <img src={scrollBtn} className={styles.scrollBtn} ref={scrollBtnRef} />
        </button> */}
        <img src={bottomText} className={styles.bottomText} ref={bottomTextRef} />
      </div>
    </div>
  );
};

export default Section2;
