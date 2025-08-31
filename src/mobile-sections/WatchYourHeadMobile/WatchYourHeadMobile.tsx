import React, { FC } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import card1 from "src/assets/watchyourhead/card1.png";
import card2 from "src/assets/watchyourhead/card2.png";
import card3 from "src/assets/watchyourhead/card3.png";
import card4 from "src/assets/watchyourhead/card4.png";
import card5 from "src/assets/watchyourhead/card5.png";
import dialog1 from "src/assets/watchyourhead/dialog1.png";
import dialog2 from "src/assets/watchyourhead/dialog2.png";
import dialog3 from "src/assets/watchyourhead/dialog3.png";
import dialog4 from "src/assets/watchyourhead/dialog4.png";
import { Autoplay } from "swiper";

interface Props {
  id?: string;
}

const WatchYourHeadMobile: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Building The Trump Agenda</h1>
        <h4 className={styles.subtitle}>Powering the future, making crypto great again</h4>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
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
          <span className={styles.card}>
            <img src={dialog1} className={styles.dialog} />
            <img src={card1} />
            <span className={styles.kmc}>0K MC</span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className={styles.card}>
            <img src={dialog2} className={styles.dialog} />
            <img src={card2} />
            <span className={styles.kmc}>0K MC</span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className={styles.card}>
            <img src={dialog3} className={styles.dialog} />
            <img src={card3} />
            <span className={styles.kmc}>500K MC</span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className={styles.card}>
            <img src={dialog4} className={styles.dialog} />
            <img src={card4} />
            <span className={styles.kmc}>2M MC</span>
          </span>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={card5} className={styles.card} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default WatchYourHeadMobile;
