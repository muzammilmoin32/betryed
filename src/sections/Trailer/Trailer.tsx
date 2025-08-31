import { FC, useRef, useEffect } from "react";
import { YOUTUBE_URL } from "src/config/constants";
// import { NavBar } from "../NavBar/NavBar";
import styles from "./styles.module.scss";
// import bat from "src/assets/trailer/bat.png";
// import kelewar from "src/assets/trailer/kelewar.png";
// import ScrollDownButton from "src/components/ScrollDownButton/ScrollDownButton";
// import { gsap } from "src/config/gsap";
// import { scrollToNextSection } from "src/utils/scrollTo";

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/|youtu\.be\/)(watch\?v=|v\/|embed\/|user\/\S+\/|.*?[?&]v=)?([\w-]{11})/;

const extractId = (link: string) => {
  const match = link.match(youtubeRegex);
  if (match) {
    const videoId = match[5];
    return videoId;
  }
  return null;
};

interface Props {
  parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export const Trailer: FC<Props> = ({ parentRef }) => {
  // const bat1Ref = useRef<HTMLImageElement>(null);
  // const bat2Ref = useRef<HTMLImageElement>(null);
  // const kelewarRef = useRef<HTMLImageElement>(null);
  // const scrollBtnRef = useRef<HTMLImageElement>(null);

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
    // gsap.fromTo(
    //   [bat1Ref.current],
    //   {
    //     scale: 1,
    //     top: "-10%",
    //   },
    //   {
    //     scale: 0.9,
    //     top: "50%",
    //     scrollTrigger,
    //   }
    // );
    // gsap.fromTo(
    //   [bat2Ref.current],
    //   {
    //     scale: 1,
    //     top: "8%",
    //     left: "5%",
    //   },
    //   {
    //     scale: 0.4,
    //     top: "55%",
    //     left: "-4%",
    //     scrollTrigger,
    //   }
    // );
    // gsap.fromTo(
    //   [kelewarRef.current],
    //   {
    //     scale: 1,
    //     top: "44%",
    //     left: "5%",
    //   },
    //   {
    //     scale: 0.9,
    //     top: "8%",
    //     left: "0%",
    //     scrollTrigger,
    //   }
    // );
    // gsap.fromTo(
    //   [scrollBtnRef.current],
    //   {
    //     bottom: "5%",
    //     left: "4%",
    //   },
    //   {
    //     bottom: "10%",
    //     left: "50%",
    //     translateX: "-50%",
    //     scrollTrigger,
    //   }
    // );
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p className={styles.heading}>Trump pepe agenda</p>
        <p className={styles.subHeading}>trailer</p>
      </div>
      {/* <NavBar /> */}
      {/* <img className={styles.bat1} src={bat} alt="bat1" ref={bat1Ref} />
      <img className={styles.bat2} src={bat} alt="bat2" ref={bat2Ref} />
      <img className={styles.kelewar} src={kelewar} alt="kelewar" ref={kelewarRef} /> */}
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${extractId(YOUTUBE_URL)}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <ScrollDownButton
        className={styles.scrollDownButton}
        refObj={scrollBtnRef}
        onClick={(e) => scrollToNextSection(e, "#about")}
      /> */}
    </div>
  );
};
