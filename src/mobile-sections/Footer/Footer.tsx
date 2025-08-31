import React, { FC } from "react";
import styles from "./styles.module.scss";
import Pepe from "src/assets/footer/pepe.png";
import Btn from "src/assets/footer/betrayedBtn.svg";
import Socials from "src/components/Socials/Socials";
import { pinksaleLink } from "src/config/constants";
import getbetrayednow from "src/assets/footer/trumpnow.png";
import bg from "src/assets/footer/bg.png";

interface Props {
  id?: string;
}

const Footer: FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${bg}),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }}
      className={styles.container}
    >
      <img style={{ width: "47%" }} src={getbetrayednow} className={styles.getbetrayednow} />
      <img src={Pepe} alt="pepe" className={styles.pepe} />
      {/* <img
        onClick={() => window.open(pinksaleLink, "_blank")}
        src={Btn}
        alt="btn"
        width={"180px"}
        style={{ cursor: "pointer" }}
      /> */}
      <Socials className={styles.socials} />

      {/* <p>CONTRACT: 0xa44c60228d3470eaf7787adae1af469094379eb3</p> */}
      {/* <h6>
        We won't take responsibility if you get lured in, your new job is simply to lure more people in to have a chance
        of survival.
      </h6> */}
    </div>
  );
};

export default Footer;
