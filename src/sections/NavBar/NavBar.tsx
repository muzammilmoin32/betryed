import { routes } from "src/config/routesConfig";
import styles from "./styles.module.css";
import React, { LegacyRef, forwardRef, FC, useEffect, useRef, MutableRefObject } from "react";
import clsx from "clsx";

import ethIcon from "../../assets/navbar/ethIcon.png";
import telegramIcon from "../../assets/navbar/telegramIcon.png";
import stickyImg from "../../assets/navbar/stickyImg.png";
import twitterIcon from "../../assets/navbar/twitterIcon.png";
import whitePaperIcon from "../../assets/navbar/whitePaperIcon.png";
import { gsap } from "gsap";
import { ETHSCAN_URL, TELEGRAM_URL, TWITTER_URL, WHITEPAPER_URL } from "src/config/constants";
interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const NavBar = forwardRef((props: Props, ref: LegacyRef<HTMLUListElement>) => {
  const iconArray = [
    { icon: whitePaperIcon, path: WHITEPAPER_URL },
    {
      icon: ethIcon,
      path: ETHSCAN_URL,
    },
    { icon: telegramIcon, path: TELEGRAM_URL },
    { icon: twitterIcon, path: TWITTER_URL },
  ];
  const refArray: MutableRefObject<HTMLAnchorElement[]> = useRef([]);
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrigger = {
      trigger: "#home",
      start: "center center",
      scrub: true,
      end: "center top",
      markers: false,
    };

    gsap.fromTo(
      divRef.current,
      {
        top: -130,
      },
      {
        top: 0,
        scrollTrigger,
      }
    );
    // refArray.current.forEach((ref, i) => {
    //   gsap.fromTo(
    //     ref,
    //     {
    //       top: -130,
    //     },
    //     {
    //       top: 30,
    //       scrollTrigger,
    //     }
    //   );
    // });
  }, []);

  return (
    <div className={props.className}>
      {/* <div ref={divRef} className={styles.iconWrapper}>
        {iconArray.map((icon, i) => (
          <a
            // ref={(element) => (refArray.current[0] = element)}
            key={i}
            className={props.className}
            target="_blank"
            href={icon.path}
          >
            <img src={icon.icon} style={{ width: i === 0 ? "44px" : "max-content" }} alt="icon" />
          </a>
        ))}
      </div> */}
      <img src={stickyImg} className={styles.stickyImg} alt="" />
      <ul ref={ref} className={clsx(styles.navbar)} style={{ ...props.style }}>
        {routes.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});
