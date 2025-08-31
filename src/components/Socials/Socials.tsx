import React from "react";
import eth from "src/assets/socials/etherscan-logo.png";
import twitter from "src/assets/socials/twitter-x-logo.png";
import telegram from "src/assets/socials/Telegram_logo_new.png";
import whitepaper from "src/assets/socials/whitepaper.png";
import { ETHSCAN_URL, TELEGRAM_URL, TWITTER_URL, WHITEPAPER_URL } from "src/config/constants";

interface Props {
  className?: string;
  refObj?: React.MutableRefObject<HTMLDivElement | null>;
}

const Socials: React.FC<Props> = ({ className, refObj }) => {
  return (
    <div ref={refObj} style={{ display: "flex", justifyContent: "center", gap: 16 }} className={className}>
      {/* <a href={ETHSCAN_URL} target="_blank">
        <img src={eth} width={70} />
      </a> */}
      <a href={TWITTER_URL} target="_blank">
        <img src={twitter} width={70} />
      </a>
      <a href={TELEGRAM_URL} target="_blank">
        <img src={telegram} width={70} />
      </a>
      {/* <a href={WHITEPAPER_URL} target="_blank">
        <img src={whitepaper} width={42} />
      </a> */}
    </div>
  );
};

export default Socials;
