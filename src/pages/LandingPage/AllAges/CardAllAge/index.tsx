import Link from "../../../../components/common/Link";
import { Text } from "../../../../components/common/Text/style";
import Title from "../../../../components/common/Title";
import { ReactComponent as Man1 } from "../../../../assets/svgs/background/man1.svg";
import Man2 from "../../../../assets/svgs/background/man2.png";
import useWindowSize from "../../../../hooks/useWindowSize";

export const CardAllAge = () => {
  const [width] = useWindowSize();

  return (
    <>
      <div className="text_box" data-aos="fade-left">
        <Text variant="labelPage">Aqui você tem</Text>

        <Title tag="h3" variant="title2">
          O tratamento que seu <span>dente merece</span>
        </Title>

        <p>
          O seu dente merece o melhor tratamento. Aqui na nossa clínica,
          oferecemos um atendimento personalizado e eficiente para cuidar da sua
          saúde bucal. contamos com uma equipe altamente qualificada para
          diagnosticar e tratar todas as condições dentárias. Garantimos um
          sorriso bonito e saudável para você!
        </p>
        <div className="text_link_box">
          <Link variant="primary" color="primary" target="_blank">
            Agendar agora
          </Link>
          <Link variant="primary" color="secondary" href="como-chegar">
            Como Chegar
          </Link>
        </div>
      </div>
      <div className="img_box" data-aos="fade-right">
        {width > 1100 ? <img src={Man2} /> : <Man1 />}
      </div>
    </>
  );
};
