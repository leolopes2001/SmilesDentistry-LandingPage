import { Slide, Slider, SliderProps } from "..";
import Patient1 from "../../../assets/svgs/patients/pat1.jpg";
import Patient2 from "../../../assets/svgs/patients/pat2.jpg";
import Patient3 from "../../../assets/svgs/patients/pat3.jpg";
import Patient4 from "../../../assets/svgs/patients/pat4.jpg";
import Patient5 from "../../../assets/svgs/patients/pat5.jpg";
import { pacients_cases } from "../../../components-mock.json";

type ImageVariantType = "img1" | "img2" | "img3" | "img4" | "img5" | "img6"

const ImageVariant: { [key in ImageVariantType]: string } = {
  img1: Patient1,
  img2: Patient2,
  img3: Patient3,
  img4: Patient4,
  img5: Patient5,
  img6: Patient3,
};

const PatientsSlider = () => {
  const settings: SliderProps = {
    navigation: true,
    loop: true,
    slidesPerView: 3.8,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      100: {
        slidesPerView: 1.2,
      },
      450: {
        slidesPerView: 1.6,
      },
      640: {
        slidesPerView: 1.8,
      },
      900: {
        slidesPerView: 2.2,
      },
      1000: {
        slidesPerView: 2.6,
      },
      1200: {
        slidesPerView: 3.2,
      },
      1250: {
        slidesPerView: 3.8,
      },
    },
  };

  return (
    <Slider variant="type3" settings={settings}>
      {pacients_cases.map((el, i) => (
        <Slide key={el.id}>
          <div className={i % 2 === 1  ? "down" : "up"}>
            <img
              src={ImageVariant[el.id as ImageVariantType]}
              alt="Patient Photo"
            />
            <p className="name">{el.case}</p>
          </div>
        </Slide>
      ))}
    </Slider>
  );
};

export default PatientsSlider;
