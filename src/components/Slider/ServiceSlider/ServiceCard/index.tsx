import { ServiceCardStyled } from "./style";
import { services } from "../../../../components-mock.json";

import Aparelho from "../../../../assets/svgs/services/aparelho1.svg";
import Alinhador from "../../../../assets/svgs/services/aparelho.svg";
import Implante from "../../../../assets/svgs/services/implante.svg";
import Limpeza from "../../../../assets/svgs/services/limpeza.svg";
import Clareamento from "../../../../assets/svgs/services/clareamento.svg";
import Botox from "../../../../assets/svgs/services/botox.svg";
import Harmonizacao from "../../../../assets/svgs/services/botox1.svg";
import Protese from "../../../../assets/svgs/services/protese.svg";

export type ServiceTypes =
  | "Aparelho Dental"
  | "Implante Dentário"
  | "Prótese Dentária"
  | "Clareamento Dental"
  | "Harmonização Orofacial"
  | "Botox"
  | "Alinhador Invisível"
  | "Limpeza Dentária";

const ImageServiceVariant: { [key in ServiceTypes]: string } = {
  "Alinhador Invisível": Alinhador,
  "Aparelho Dental": Aparelho,
  Botox: Botox,
  "Prótese Dentária": Protese,
  "Clareamento Dental": Clareamento,
  "Harmonização Orofacial": Harmonizacao,
  "Implante Dentário": Implante,
  "Limpeza Dentária": Limpeza,
};

const ServiceCard = ({ service }: { service: ServiceTypes }) => {
  return (
    <ServiceCardStyled>
      <img src={ImageServiceVariant[service]} alt="Services" />
      <h2>{service}</h2>
      <div className="hover_points">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ServiceCardStyled>
  );
};
export default ServiceCard;
