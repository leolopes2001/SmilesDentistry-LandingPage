import Aos from "aos";
import { useEffect } from "react";
import SideBar from "./components/SideBar";
import Providers from "./contexts";
import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./styles/global";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Providers>
      <GlobalStyle />

      <LandingPage />

      <SideBar variant="main_side_bar" />
    </Providers>
  );
};

export default App;
