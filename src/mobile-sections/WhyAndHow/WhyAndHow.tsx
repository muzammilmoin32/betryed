import { FC } from "react";
import styles from "./styles.module.css";
import why from "src/assets/section2/mobile-assets/why.png";
import how from "src/assets/section2/mobile-assets/howNew.png";

interface Props {
  id?: string;
}

const WhyAndHow: FC<Props> = ({ id }) => {
  return (
    <>
      <div id={id} className={styles.root}>
        <img
          src={why}
          width={"100%"}
          height="100%"
          style={{
            padding: "20px",
          }}
        />
      </div>

      <div className={styles.sectionNew}>
        <img
          src={how}
          width={"100%"}
          height={"100%"}
          style={{
            padding: "20px",
          }}
        />
      </div>
    </>
  );
};

export default WhyAndHow;
