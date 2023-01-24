import Aparelho from "../../../../assets/svgs/services/aparelho1.svg";
import { ServiceCatdStyled } from "./style";

const ServiceCard = () => {
  return (
    <ServiceCatdStyled>
      <img src={Aparelho} alt="" />
      <h2>Limpeza</h2>
      <div className="hover_points">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ServiceCatdStyled>
  );
};
export default ServiceCard;
