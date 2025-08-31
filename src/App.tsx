import "src/config/gsap";
import "./App.css";
import { useMediaQuery } from "./hooks/useMediaQuery";
import AppForMobile from "./mobile-sections";
import AppForDesktop from "./sections";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const matches = useMediaQuery("(max-width: 900px)");
  return <>{matches ? <AppForMobile /> : <AppForDesktop />}</>;
}

export default App;
