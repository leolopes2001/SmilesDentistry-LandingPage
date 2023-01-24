import Background from "../../../assets/svgs/background/back22.svg";
import { Container } from "../../../components/common/Container/style";
import Link from "../../../components/common/Link";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";
import useWindowSize from "../../../hooks/useWindowSize";

import { ReactComponent as Board1 } from "../../../assets/svgs/services/board1.svg";
import { ReactComponent as Board2 } from "../../../assets/svgs/services/board2.svg";
import { ReactComponent as Points } from "../../../assets/svgs/icons/points.svg";
import Wpp from "../../../assets/svgs/icons/whatsapp.svg";
import { SectionStyled } from "./style";
import SerivesSlider from "../../../components/Slider/ServiceSlider";
import ServiceCard, {
  ServiceTypes,
} from "../../../components/Slider/ServiceSlider/ServiceCard";
import { services } from "../../../components-mock.json";
import Back from "../../../assets/svgs/background/serviceTop.svg";
import Back2 from "../../../assets/svgs/background/borderBottom.svg";

const Services = () => {
  const [width] = useWindowSize();

  return (
    <SectionStyled>
      <Container variant="normal">
        <div className="title_box">
          <Text variant="labelPage">Nossos Tratamentos</Text>

          <Title variant="title3" tag="h3">
            Tipos de tratamentos
          </Title>
        </div>
        {width > 1200 ? (
          <div className="list_services">
            {services.map((el) => (
              <ServiceCard key={el} service={el as ServiceTypes} />
            ))}
          </div>
        ) : (
          <SerivesSlider />
        )}

        <div className="info_box">
          <Board1 className="board1" />
          {width > 1000 ? (
            <Board2 className="board2" />
          ) : (
            <Board1 className="board2" />
          )}

          <Title variant="title5" tag="h6">
            Fale com a gente agora
          </Title>
          <div className="info">
            <Points />
            <p>31 9999999999</p>
            <img src={Wpp} alt="What Zapp" />
          </div>
          <div className="link">
            <Points />
            <Link variant="primary" color="primary">
              Agendar agora
            </Link>
          </div>
        </div>
        <img src={Back2} alt="" className="boardBottom" />
        <img src={Back} alt="Background" className="boardTop" />
      </Container>
    </SectionStyled>
  );
};
export default Services;
