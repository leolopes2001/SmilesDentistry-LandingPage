import { Container } from "../../../components/common/Container/style";
import { navLinks, contact_info } from "../../../components-mock.json";
import Link from "../../../components/common/Link";
import { useCallback, useState } from "react";
import Phone from "../../../assets/svgs/icons/phone.svg";
import Points from "../../../assets/svgs/icons/points.svg";
import Logo from "../../../assets/svgs/icons/logoDefault.svg";

import Back from "../../../assets/svgs/background/family.svg";
import Back2 from "../../../assets/svgs/background/family.jpg";
import Top from "../../../assets/svgs/background/top.svg";
import HomeSlider from "../../../components/Slider/HomeSlider";
import { Background } from "./style";

const Home = () => {
  const [currentNavLink, setCurrentNavLink] = useState("");

  const handleNavLinkClick = useCallback(
    (id: string) => setCurrentNavLink(id),
    []
  );

  console.log("criou");

  return (
    <main>
      <Background>
        <HomeSlider />

        <img src={Top} alt="" className="shape" />
      </Background>
    </main>
  );
}

export default Home;
