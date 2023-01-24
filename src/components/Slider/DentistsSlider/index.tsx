import { Slide, Slider, SliderProps } from "..";
import { dentists } from "../../../components-mock.json";
import DentistsCard from "./DentistsCard";

const DentistsSlider = () => {
  const settings: SliderProps = {
    loop: true,
    navigation: true,
    slidesPerView: 1,
  };

  return (
    <Slider variant="type5" settings={settings}>
      {dentists.map(({ id, name, specialization }) => (
        <Slide>
          <DentistsCard
            id={id as "1" | "2" | "3" | "4"}
            name={name}
            work={specialization}
          />
        </Slide>
      ))}
    </Slider>
  );
};

export default DentistsSlider;
