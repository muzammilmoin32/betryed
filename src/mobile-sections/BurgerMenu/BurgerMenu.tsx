import { useState } from "react";
import Burger from "src/assets/navbar/burgerMenu.png";
import logo from "src/assets/section1/logoTrump.png";
import styles from "./styles.module.scss";
import { routes } from "src/config/routesConfig";
import eth from "src/assets/socials/etherscan-logo.png";
import twitter from "src/assets/socials/twitter-x-logo.png";
import telegram from "src/assets/socials/Telegram_logo_new.png";
import whitepaper from "src/assets/socials/whitepaper.png";
import { ETHSCAN_URL, TELEGRAM_URL, TWITTER_URL, WHITEPAPER_URL, pinksaleLink } from "src/config/constants";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <img
        src={Burger}
        alt="burger"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      />
      <div className={styles.backdrop + ` ${!open && styles.inActive}`} onClick={() => setOpen(false)}></div>
      <ul className={styles.navbar + ` ${!open && styles.inActive}`}>
        <li>
          <img className={styles.logo} src={logo} alt="logo" />
        </li>
        {routes.map(({ name, url }) => (
          <li onClick={() => setOpen(false)}>
            <a href={url}>{name}</a>
          </li>
        ))}
        {/* <li onClick={() => setOpen(false)}>
          <a href={WHITEPAPER_URL} target="__blank">
            WHITEPAPER
          </a>
        </li> */}
        <li onClick={() => setOpen(false)}>
          <a href={pinksaleLink} target="__blank">
            $TRUMPPEPE
          </a>
        </li>
        <li>
          <div className={styles.socials}>
            {/* <a href={ETHSCAN_URL} target="_blank">
              <img src={eth} />
            </a> */}
            <a href={TWITTER_URL} target="_blank">
              <img src={twitter} />
            </a>
            <a href={TELEGRAM_URL} target="_blank">
              <img src={telegram} />
            </a>
            <a href={WHITEPAPER_URL} target="_blank">
              <img src={whitepaper} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
