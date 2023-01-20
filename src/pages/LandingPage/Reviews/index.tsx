import { Container } from "../../../components/common/Container/style";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";

const Reviews = () => {
  return (
    <section>
      <div>
        <Text variant="labelPage">Our Client Feedback</Text>
        <Title variant="title2" tag="h4">
          Client’s give us <span> many reviews for us.</span>
        </Title>
      </div>

      <Container variant="normal">
        <div>
          <div className="starts"></div>
          <p>
            Wow. What a great experience with this copywriter. Muhammad Noman is
            a very talented copywriter. yesterday I got his first Email that was
            amazing... experience with him
          </p>
          <div className="profile">
            <div></div>
            <div>
              <h6>Esther Howard</h6>
              <p>P. Desiger of (Amazon)</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Reviews;
