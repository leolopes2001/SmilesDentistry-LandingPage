// import SideBar from './components/SideBar';
import Providers from "./contexts";
import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./styles/global";
import "./style.css";

import Back from "./assets/svgs/background/family.jpg";
import Back2 from "./assets/svgs/background/family3.jpg";
import Top from "./assets/svgs/background/top.svg";

const App = () => {
  return (
    <Providers>
      <GlobalStyle />

      <LandingPage />

    

      {/* <SideBar variant='main_side_bar' /> */}
    
    </Providers>
  );
};

export default App;
