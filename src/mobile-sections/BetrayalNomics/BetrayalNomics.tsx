import { FC } from "react";
import styles from "./styles.module.scss";
import pepeStonk from "src/assets/betrayalNomics/pepeStonk.png";

interface Props {
  id?: string;
}

export const BetrayalNomics: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <img className={styles.pepeStonk} src={pepeStonk} alt="pepeStonk" />
      <h2 className={styles.heading}>trumpnomics</h2>
      {/* <div className={styles.sale}>
        <p className={styles.percentage}>0%</p>
        <p className={styles.percentage}>3%</p>
      </div> */}
      <p className={styles.helperText2}>0% / 3%</p>
      <p className={styles.helperText}>BUY/SELL</p>
      <p className={styles.description}>
        Here at the Trump Agenda, we're all about community-driven action, and that means keeping a close eye on every
        <br />
        <br />
        move our team makes. In the spirit of transparency and fairness, we're thrilled to announce a game-changing
        <br />
        <br />
        feature: a whopping 0% tax on all buy and sell transactions! That's right – no sneaky fees or hidden charges
        <br />
        <br />
        here. Just pure, unadulterated crypto excitement. Stay glued to your screens for more thrilling announcements
        and updates as we continue to shake up the crypto world in the most epic way possible!
      </p>
    </div>
  );
};
