import { Slide, Slider, SliderProps } from "..";
import ReviewCard from "./ReviewCard";

const ReviewSlider = () => {
  const settings: SliderProps = {
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
  };

  return (
    <Slider variant="type4" settings={settings}>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
      <Slide>
        <ReviewCard
          name="Esther Howard"
          work="P. Desiger of (Amazon)"
          review="Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
experience with him"
        />
      </Slide>
    </Slider>
  );
};

export default ReviewSlider;
