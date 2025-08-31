import { gsap } from "src/config/gsap";
import bg1 from "../../assets/section1/trumpbg1.png";
import bg2 from "../../assets/section1/trumpbg2.png";
import bg3 from "../../assets/section1/trumpbg3.png";
import bg4 from "../../assets/section1/trumpbg4.png";
import bg5 from "../../assets/section1/bg5.png";
// import cloud from "../../assets/section1/cloud.png";
import pep_circus from "../../assets/section1/pep-circus.png";
// import pigeon from "../../assets/section1/pigeon.png";
// import pigeon1 from "../../assets/section1/pigeon1.png";
import logoImage from "../../assets/section1/logoTrump.png";
// import ScrollDownButton from "../../components/ScrollDownButton/ScrollDownButton";
import { NavBar } from "../NavBar/NavBar";
import styles from "./styles.module.css";
import bg1Dialogue0 from "../../assets/section1/bg1Dialogue0.png";
import bg1Dialogue1 from "../../assets/section1/bg1Dialogue1.png";
import bg2Dialogue from "../../assets/section1/bg2Dialogue.png";
import bg3Dialogue from "../../assets/section1/bg3Dialogue.png";
import bg5Dialogue from "../../assets/section1/bg5Dialogue.png";
import mrTrump from "../../assets/section1/mrtrump.png";
import agendaStart from "../../assets/section1/agendaStart.png";
import butwhy from "../../assets/section1/butWhy.png";
// import pigeon2 from "../../assets/section1/pigeon2.png";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "src/hooks/useMediaQuery";
// import { scrollToNextSection } from "src/utils/scrollTo";

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const Section1: React.FC<Props> = ({ parentRef }) => {
  const laptop = useMediaQuery("(max-width: 1450px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const firstAnimationCloudRefs = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];
  const secondAnimationCloudRefs = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];

  const pigeon_ref_0 = useRef<HTMLImageElement>(null);
  const pigeon_ref_1 = useRef<HTMLImageElement>(null);
  const pigeon_ref_2 = useRef<HTMLImageElement>(null);
  const pigeon_ref_3 = useRef<HTMLImageElement>(null);
  const pigeon_ref_4 = useRef<HTMLImageElement>(null);
  const pigeon_ref_7 = useRef<HTMLImageElement>(null);
  const pigeon_ref_5 = useRef<HTMLImageElement>(null);
  const pigeon_ref_6 = useRef<HTMLImageElement>(null);

  const navRef = useRef<HTMLUListElement>(null);

  const cardImageRef_3 = useRef<HTMLImageElement>(null);
  const cardImageRef_2 = useRef<HTMLImageElement>(null);
  const cardImageRef_4 = useRef<HTMLImageElement>(null);
  const cardImageRef_1 = useRef<HTMLImageElement>(null);
  const cardImageRef_5 = useRef<HTMLImageElement>(null);
  const cardImageFadRef_1 = useRef<HTMLImageElement>(null);
  const cardImageFadRef_5 = useRef<HTMLImageElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const pep_circusRef = useRef<HTMLImageElement>(null);
  const buttonImageRef = useRef<HTMLImageElement>(null);
  const bg3DialogueRef = useRef<HTMLImageElement>(null);
  const bg1Dialogue0Ref = useRef<HTMLImageElement>(null);
  const bg1Dialogue1Ref = useRef<HTMLImageElement>(null);
  const bg5DialogueRef = useRef<HTMLImageElement>(null);
  const bg2DialogueRef = useRef<HTMLImageElement>(null);
  const mrTrumpRef = useRef<HTMLImageElement>(null);
  const agendaStartRef = useRef<HTMLImageElement>(null);
  const butWhyRef = useRef<HTMLImageElement>(null);

  const cloudAnimations = [
    {
      initialOpacity: 1,
      finalOpacity: 0,
      translateInitialValueY: 40,
      translateInitialValueX: -63,

      translateFinalPointX: 503,
      translateFinalPointY: 220,
    },
    {
      initialOpacity: 1,
      finalOpacity: 0,
      translateInitialValueY: 40,
      translateInitialValueX: -63,

      translateFinalPointX: 603,
      translateFinalPointY: 220,
    },
    {
      initialOpacity: 1,
      finalOpacity: 0,
      translateInitialValueY: 40,
      translateInitialValueX: 0,

      translateFinalPointX: 603,
      translateFinalPointY: 220,
    },
    {
      initialOpacity: 1,
      finalOpacity: 0,
      translateInitialValueY: 40,
      translateInitialValueX: -38,

      translateFinalPointX: 703,
      translateFinalPointY: 220,
    },
  ];

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

    firstAnimationCloudRefs.forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        {
          translateX: cloudAnimations[index].translateInitialValueX,
          translateY: cloudAnimations[index].translateInitialValueY,
          opacity: cloudAnimations[index].initialOpacity,
        },
        {
          translateX: cloudAnimations[index].translateFinalPointX,
          translateY: cloudAnimations[index].translateFinalPointY,
          opacity: cloudAnimations[index].finalOpacity,
          scrollTrigger,
        }
      );
    });

    secondAnimationCloudRefs.forEach((ref, index) => {
      let tween = gsap.fromTo(
        ref.current,
        {
          opacity: cloudAnimations[index].finalOpacity,
        },
        {
          opacity: cloudAnimations[index].initialOpacity,
          scrollTrigger,
        }
      );
    });

    gsap.fromTo(
      pigeon_ref_0.current,
      {
        scale: 1,
        translateX: 0,
        translateY: 63,
      },

      {
        scale: 1,
        translateX: 22,
        translateY: -22,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_1.current,
      {
        scale: 0.4,
        translateX: 0,
        translateY: -63,
      },

      {
        scale: 0.4,
        translateX: -30,
        translateY: 7,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_2.current,
      {
        translateX: -71,
        translateY: -3,
      },

      {
        translateX: 0,
        translateY: 0,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );

    gsap.fromTo(
      pigeon_ref_3.current,
      {
        translateX: "-109%",
        translateY: "4.0159%",
        rotate: 180,
      },

      {
        rotate: 180,
        translateX: "760%",
        translateY: "-58%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_4.current,
      {
        translateX: 0,
        translateY: 29,
      },

      {
        translateX: "-150%",
        translateY: 43,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_7.current,
      {
        translateX: 0,
        translateY: 0,
      },

      {
        translateX: "1208%",
        translateY: "-3%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_5.current,
      {
        scale: 0.9,
      },

      {
        scale: 1.4,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      navRef.current,
      {
        translateX: "0%",
      },

      {
        translateX: "11%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pigeon_ref_6.current,
      {
        translateX: "0%",
      },

      {
        translateX: "151%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );

    gsap.fromTo(
      cardImageRef_3.current,
      {
        top: 0,
        right: 0,
      },
      {
        top: "30%",
        right: "89%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      cardImageRef_2.current,
      {
        top: -9,
      },
      {
        top: "76%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      cardImageRef_4.current,
      {
        bottom: "-17%",
        left: "25.6%",
        scale: 1,
      },
      {
        scale: 1.2,
        bottom: "48%",
        left: "15.6%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      cardImageRef_1.current,
      {
        top: "-7px",
        left: "-3.1%",
        opacity: 1,
      },
      {
        top: "-37px",
        opacity: 0,
        left: "14.1%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      cardImageRef_5.current,
      {
        right: "23.3%",
        bottom: "-13.9%",
        opacity: 1,
      },
      {
        right: "5.3%",
        opacity: 0,
        bottom: "8.1%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );

    gsap.fromTo(
      cardImageFadRef_1.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      cardImageFadRef_5.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );

    gsap.fromTo(
      logoImageRef.current,
      {
        top: "-33%",
        left: "100%",
        width: "15%",
      },
      {
        opacity: 1,
        bottom: "45%",
        left: "83%",
        width: laptop ? "15%" : "26%",
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      pep_circusRef.current,
      { left: "3%", bottom: 0, width: "30%" },
      {
        left: "20%",
        bottom: "-1%",
        width: "15%",
        //  ease: "elastic.out(1,0.2)", duration: 3,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      buttonImageRef.current,
      { scaleY: 1.5, scaleX: 1.2, translateY: "0%" },
      {
        translateY: "31%",
        scaleY: 1,
        scaleX: 1,
        //  ease: "elastic.out(1,0.2)", duration: 3,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      bg3DialogueRef.current,
      {
        opacity: 0,
        width: "29%",
      },
      {
        opacity: 1,
        width: laptop ? "26%" : "29%",
        // ease: "elastic.out(1,0.2)",
        // duration: 3,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      mrTrumpRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        width: laptop ? "10%" : "12%",
        // ease: "elastic.out(1,0.2)",
        // duration: 3,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      agendaStartRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        width: laptop ? "15%" : "20%",
        // ease: "elastic.out(1,0.2)",
        // duration: 3,
        scrollTrigger,
      }
    );
    gsap.fromTo(
      butWhyRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      bg1Dialogue0Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      bg1Dialogue1Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      bg5DialogueRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
    gsap.fromTo(
      bg2DialogueRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        // ease: "elastic.out(0.3, 0.2)",
        // duration: "0.9",

        scrollTrigger,
      }
    );
  }, []);

  return (
    <div className={styles.root} ref={containerRef}>
      {/* <NavBar ref={navRef} /> */}
      {/* <div className={styles.clouds}>
        {firstAnimationCloudRefs.map((ref, index) => (
          <img
            key={index}
            src={cloud}
            ref={ref}
            alt={`cloud${index + 1}`}
            className={`${styles.cloud} ${styles[`cloud_${index}`]}`}
          />
        ))}

        {secondAnimationCloudRefs.map((ref, index) => (
          <img
            key={index}
            src={cloud}
            style={{
              position: "absolute",
              transform: "scale(1.5)",
              top: `${
                secondAnimationCloudRefs.length - 1 === index
                  ? 100
                  : secondAnimationCloudRefs.length - 2 === index
                  ? 200
                  : index === 1
                  ? 100
                  : 0
              }px`,
              left: secondAnimationCloudRefs.length - 1 === index ? "30%" : undefined,
              right:
                secondAnimationCloudRefs.length - 2 === index
                  ? "27%"
                  : secondAnimationCloudRefs.length - 3 === index
                  ? "0px"
                  : undefined,
            }}
            ref={ref}
            alt={`cloud${index + 1}`}
            className={`${styles.cloud} ${styles[`cloud_${index}`]}`}
          />
        ))}
      </div>
      <div className={styles.pigeonImages}>
        <div>
          <img src={pigeon} ref={pigeon_ref_0} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_0}`} />
          <img src={pigeon2} ref={pigeon_ref_1} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_1}`} />
          <img src={pigeon1} ref={pigeon_ref_2} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_2}`} />
        </div>

        <div>
          <img src={pigeon} ref={pigeon_ref_3} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_3}`} />
          <img src={pigeon2} ref={pigeon_ref_4} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_4}`} />
          <img src={pigeon} ref={pigeon_ref_7} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_7}`} />
        </div>
        <div>
          <img src={pigeon2} ref={pigeon_ref_5} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_5}`} />
          <img src={pigeon} ref={pigeon_ref_6} alt="pigeon" className={`${styles.pigeon} ${styles.pigeon_6}`} />
        </div>
      </div> */}

      <div className={styles.content}>
        <img src={bg1} ref={cardImageFadRef_1} className={styles.bg1Fad} alt="" />
        <img src={bg1} ref={cardImageRef_1} className={styles.bg1} alt="" />
        <img src={bg1Dialogue0} ref={bg1Dialogue0Ref} className={styles.bg1Dialogue0} alt="" />
        <img src={bg1Dialogue1} ref={bg1Dialogue1Ref} className={styles.bg1Dialogue1} alt="" />
        <img src={butwhy} ref={butWhyRef} className={styles.butWhy} alt="" />
        <img src={bg2} ref={cardImageRef_2} className={styles.bg2} alt="" />
        <img src={bg2Dialogue} ref={bg2DialogueRef} className={styles.bg2Dialogue} alt="" />
        <img src={agendaStart} ref={agendaStartRef} className={styles.agendaStart} alt="" />
        <img src={bg3} ref={cardImageRef_3} className={styles.bg3} alt="" />
        <img src={bg3Dialogue} ref={bg3DialogueRef} className={styles.bg3Dialogue} alt="" />
        <img src={mrTrump} ref={mrTrumpRef} className={styles.mrTrump} alt="" />

        <img src={bg4} ref={cardImageRef_4} className={styles.bg4} alt="" />
        <img src={bg5} ref={cardImageRef_5} className={styles.bg5} alt="" />
        <img src={bg5Dialogue} ref={bg5DialogueRef} className={styles.bg5Dialogue} alt="" />
        <img src={bg5} ref={cardImageFadRef_5} className={styles.fadbg5} alt="" />
        <img src={logoImage} ref={logoImageRef} className={styles.logo} alt="" />
      </div>

      <img className={styles.pep_circus} ref={pep_circusRef} src={pep_circus} alt="pep circus" />
      {/* <ScrollDownButton
        refObj={buttonImageRef}
        onClick={(e) => scrollToNextSection(e, "#how")}
        className={styles.btn}
      /> */}
    </div>
  );
};
export default Section1;
