import Link from "../../../components/common/Link";
import { Text } from "../../../components/common/Text/style";
import Title from "../../../components/common/Title";
import { SectionStyled } from "./style";
import { ReactComponent as Man1 } from "../../../assets/svgs/background/man1.svg";

const AllAges = () => {
  return (
    <SectionStyled>
      <p>Atendimento para todas as idades</p>
      <div className="navigation_box">
        <Link variant="primary" color="primary">
          Crianças
        </Link>
        <Link variant="primary" color="primary">
          Adultos
        </Link>
        <Link variant="primary" color="primary">
          Melhor idade
        </Link>
      </div>
      <div className="content_box">
        <div className="text_box">
          <Text variant="labelPage">Aqui você tem</Text>

          <Title tag="h3" variant="title2">
            O tratamento que seu <span>dente merece</span>
          </Title>
          
          <p>
            O seu dente merece o melhor tratamento. Aqui na nossa clínica,
            oferecemos um atendimento personalizado e eficiente para cuidar da
            sua saúde bucal. contamos com uma equipe altamente qualificada para
            diagnosticar e tratar todas as condições dentárias. Garantimos um
            sorriso bonito e saudável para você!
          </p>
          <div className="text_link_box">
            <Link variant="primary" color="primary">Agendar agora</Link>
            <Link variant="primary" color="primary">Agendar agora</Link>
          </div>
        </div>
        <div className="img_box">
          <Man1/>
        </div>
      </div>
    </SectionStyled>
  );
};

export default AllAges;
