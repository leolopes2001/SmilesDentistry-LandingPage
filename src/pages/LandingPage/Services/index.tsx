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
        {width > 1200 ? <></> : <></>}

        <div className="info_box">
          <Board1 className="board1" />
          <Board1 className="board2" />

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
      </Container>

      <img src={Background} alt="Background" />
    </SectionStyled>
  );
};
export default Services;
