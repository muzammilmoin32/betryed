import React, { FC } from "react";
import styles from "./styles.module.css";
import betrayedLogo from "../../assets/section1/logoTrump.png";
import quotebait from "src/assets/masterplan/quote-bait.png";
import quotetrap from "src/assets/masterplan/quote-trap.png";
import quotelure from "src/assets/masterplan/quote-lure.png";
import quotebetrayal from "src/assets/masterplan/quote-betrayal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

interface Props {
  id?: string;
}

const Masterplan: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <div className={styles.mainContainer}>
        <img src={betrayedLogo} alt="Logo" className={styles.logo} />
        <h1>FEATURES</h1>
        <div className={styles.quotesContainer}>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              580: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img src={quotebait} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quotelure} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quotetrap} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quotebetrayal} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Masterplan;
