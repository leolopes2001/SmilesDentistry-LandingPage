import { Slide, Slider, SliderProps } from "..";
import Patient1 from "../../../assets/svgs/patients/pat1.jpg";
import Patient2 from "../../../assets/svgs/patients/pat2.jpg";
import Patient3 from "../../../assets/svgs/patients/pat3.jpg";
import Patient4 from "../../../assets/svgs/patients/pat4.jpg";
import Patient5 from "../../../assets/svgs/patients/pat5.jpg";

const PatientsSlider = () => {
  const settings: SliderProps = {
    navigation: true,
    loop: true,
    slidesPerView: 3.8,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
        100:{
            slidesPerView: 1.2,
        },
        450:{
            slidesPerView: 1.6,
        },
        640:{
            slidesPerView: 1.8,
        },
        900:{
            slidesPerView: 2.2,
        },
        1000:{
            slidesPerView: 2.6,
        },
        1200:{
            slidesPerView: 3.2,
        },
        1250:{
            slidesPerView: 3.8,
        }
    }
  };

  return (
    <Slider variant="type3" settings={settings}>
      <Slide>
        <div className="down">
          <img src={Patient1} alt="" />
        </div>
      </Slide>
      <Slide>
        <div className="up">
          <img src={Patient2} alt="" />
        </div>
      </Slide>
      <Slide>
        <div className="down">
          <img src={Patient3} alt="" />
        </div>
      </Slide>
      <Slide>
        <div className="up">
          <img src={Patient4} alt="" />
        </div>
      </Slide>
      <Slide>
        <div className="down">
          <img src={Patient5} alt="" />
        </div>
      </Slide>
      <Slide>
        <div className="up">
          <img src={Patient3} alt="" />
        </div>
      </Slide>
    </Slider>
  );
};

export default PatientsSlider;
