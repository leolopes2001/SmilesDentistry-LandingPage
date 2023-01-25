import Link from "../../../common/Link";
import Title from "../../../common/Title";
import { CardStyled } from "./style";
import TitleStyleImg from "../../../../assets/svgs/icons/title_style.svg";

const Card = () => {
  return (
    <CardStyled>
      <Title tag="h3" variant="title1">
        <span>Dentistas que cuidam do seu sorriso</span>
        <img src={TitleStyleImg} alt="Title style" className="title_style" />
      </Title>
      <p>Clique para no botão abaixo para agendar uma avaliação</p>
      <div>
        <Link color="primary" variant="primary" target="_blank">
          AGENDAR
        </Link>
        <Link color="secondary" variant="primary" href="como-chegar">
          COMO CHEGAR
        </Link>
      </div>
    </CardStyled>
  );
};
export default Card;
