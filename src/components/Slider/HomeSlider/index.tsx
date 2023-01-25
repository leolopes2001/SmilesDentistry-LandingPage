import { Slide, Slider, SliderProps } from "..";

import Img1 from "../../../assets/svgs/background/family3.jpg";
import Img2 from "../../../assets/svgs/background/family.jpg";
import Img3 from "../../../assets/svgs/background/family5.jpg";

import useSwiperRef from "../../../hooks/useSwiperRef";

import { ReactComponent as HomeBtnSlider1 } from "../../../assets/svgs/background/homeBtnSlider1.svg";
import { ReactComponent as HomeBtnSlider2 } from "../../../assets/svgs/background/homeBtnSlider2.svg";
import { Container } from "../../common/Container/style";
import Arrow from "../../../assets/svgs/icons/arrow.svg";
import Card from "./Card";

const HomeSlider = () => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  const settings: SliderProps = {
    navigation: { nextEl, prevEl },
    loop: true,
    slidesPerView: 1,
  };

  return (
    <Slider variant="type1" settings={settings}>
      <Slide>
        <img src={Img2} alt="" />
        <Container>
          <Card />
        </Container>
      </Slide>
      <Slide>
        <img src={Img1} alt="" />
        <Container>
          <Card />
        </Container>
      </Slide>
      <Slide>
        <img src={Img3} alt="" />
        <Container>
          <Card />
        </Container>
      </Slide>

      <Container variant="big">
        <button className="prevButton" ref={prevElRef}>
          <HomeBtnSlider1 />
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>

        <button ref={nextElRef} className="nextButton">
          <HomeBtnSlider2 />
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
      </Container>
    </Slider>
  );
};

export default HomeSlider;
