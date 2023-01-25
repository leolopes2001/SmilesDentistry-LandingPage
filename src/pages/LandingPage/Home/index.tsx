import Top from "../../../assets/svgs/background/top.svg";
import HomeSlider from "../../../components/Slider/HomeSlider";
import { Background } from "./style";
import { IPages } from "..";

const Home = ({id,innerRef}: IPages) => {
  return (
    <main ref={innerRef} id={id} data-aos="zoom-out">
      <Background>
        <HomeSlider />

        <img src={Top} alt="" className="shape" />
      </Background>
    </main>
  );
};

export default Home;
