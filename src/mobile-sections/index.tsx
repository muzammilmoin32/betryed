import WatchYourHeadMobile from "./WatchYourHeadMobile/WatchYourHeadMobile";
import WhyAndHow from "./WhyAndHow/WhyAndHow";
import LaunchTimerMobile from "./LaunchTimerMobile/LaunchTimerMobile";
import { Trailer } from "./Trailer/Trailer";
import { About } from "./About/About";
import PepeIntro from "./PepeIntro/PepeIntro";
import { BetrayalNomics } from "./BetrayalNomics/BetrayalNomics";
import Masterplan from "./Masterplan/Masterplan";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

const AppForMobile = () => {
  return (
    <div>
      <BurgerMenu />
      <Hero id="home" />
      <Trailer />
      <PepeIntro id="why" />
      <WhyAndHow id="how" />
      <LaunchTimerMobile />
      <About />
      <WatchYourHeadMobile />
      <BetrayalNomics id="trumpnomics" />
      <Masterplan id="roadmaps" />
      <Footer />
    </div>
  );
};

export default AppForMobile;
