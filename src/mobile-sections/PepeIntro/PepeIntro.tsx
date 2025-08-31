import { FC } from "react";
import styles from "./styles.module.scss";
import comicImages from "../../assets/section1/mobile-assets/comicNewImages.png";
import trumpLogo from "../../assets/section1/logoTrump.png";

interface Props {
  id?: string;
}

const PepeIntro: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <div className={styles.logoContainer}>
        <img src={trumpLogo} height={"100%"} width={"30%"} alt="" />
      </div>
      <img
        src={comicImages}
        width={"100%"}
        height={"100%"}
        style={{
          margin: "0% 0 20% 0",
          padding: "0 1% 0 1%",
        }}
      />
    </div>
  );
};

export default PepeIntro;
