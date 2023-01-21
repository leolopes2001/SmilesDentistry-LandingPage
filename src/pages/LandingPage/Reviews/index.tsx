import { Container } from "../../../components/common/Container/style";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";
import Background from "../../../assets/svgs/background/reviewBack.svg";
import { SectionStlyed } from "./style";
import ReviewSlider from "../../../components/Slider/ReviewSlider";

const Reviews = () => {
  return (
    <SectionStlyed>
      <div className="title_box">
        <Text variant="labelPage">Our Client Feedback</Text>
        <Title variant="title2" tag="h4">
          Client’s give us many <span> reviews for us.</span>
        </Title>
      </div>

      <Container variant="normal">
        <ReviewSlider/>
      </Container>

      <img src={Background} alt="Background" />
    </SectionStlyed>
  );
};
export default Reviews;
