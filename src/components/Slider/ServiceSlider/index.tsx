import { Slide, Slider, SliderProps } from "..";

import Aparelho from "../../../assets/svgs/services/aparelho1.jpg";
import ServiceCard from "./ServiceCard";

const ImageVariant = {

}

const SerivesSlider = () => {
  const settings: SliderProps = {
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 40,
  };

  return (
    <Slider variant="type2" settings={settings}>
      <Slide>
        <ServiceCard/>
      </Slide>
      <Slide>
        <ServiceCard/>
      </Slide>
      <Slide>
        <ServiceCard/>
      </Slide>
    </Slider>
  );
};

export default SerivesSlider;
