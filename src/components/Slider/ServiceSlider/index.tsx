import { Slide, Slider, SliderProps } from "..";
import ServiceCard, { ServiceTypes } from "./ServiceCard";
import { services } from "../../../components-mock.json";

const SerivesSlider = () => {
  const settings: SliderProps = {
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 40,
    breakpoints: {
      500: {
        slidesPerView: 1.6,
      },
      1000: {
        slidesPerView: 3.8
      }
    },
  };

  return (
    <Slider variant="type2" settings={settings}>
      {services.map((el) => (
        <Slide key={el}>
          <ServiceCard service={el as ServiceTypes} />
        </Slide>
      ))}
    </Slider>
  );
};

export default SerivesSlider;
