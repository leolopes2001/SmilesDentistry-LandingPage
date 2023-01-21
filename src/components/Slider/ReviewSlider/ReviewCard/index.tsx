import { AiFillStar } from "react-icons/ai";
import { ReviewCardStyled } from "./style";

interface IReviewCardProps {
  name: string;
  review: string;
  work: string;
}

const ReviewCard = ({ name, review, work }: IReviewCardProps) => {
  return (
    <ReviewCardStyled>
      <div className="starts">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p className="review">
        {review}
      </p>
      <div className="info">
        <div className="photo"></div>
        <div className="name">
          <span>{name}</span>
          <p>{work}</p>
        </div>
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewCard;
