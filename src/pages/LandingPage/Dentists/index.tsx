import { Container } from "../../../components/common/Container/style";
import Link from "../../../components/common/Link";
import Title from "../../../components/common/Title";
import Twenty from "../../../assets/svgs/icons/20.svg";
import { SectionStyled } from "./style";
import DentistsSlider from "../../../components/Slider/DentistsSlider";
import { dentists } from "../../../components-mock.json";
import DentistsCard from "../../../components/Slider/DentistsSlider/DentistsCard";
import useWindowSize from "../../../hooks/useWindowSize";
import { IPages } from "..";

const Dentists = ({id,innerRef}: IPages) => {
  const [width] = useWindowSize();

  return (
    <SectionStyled id={id} ref={innerRef}>
      <Container>
        <div className="header">
          <img src={Twenty} alt="Number 20" data-aos="fade-right"/>
          <div data-aos="fade-left">
            <Title tag="h2" variant="title3">
              Tratamentos odontológicos
            </Title>
            <p>
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
              commodo claritatem insitamconse quat.Exerci tation ullamcorper
              suscipit loborti excommodo habent claritatem insitamconse
              quat.Exerci tationlobortis nisl aliquip ex ea commodo n
              ullamcorper suscipit loborti excommodo
            </p>
          </div>
        </div>
        {width > 1100 ? (
          <div
            className={dentists.length < 3 ? "dentists_list center" : "dentists_list"}
          >
            {dentists.map(({ id, name, specialization }) => (
              <DentistsCard
                key={id}
                id={id as "1" | "2" | "3" | "4"}
                name={name}
                work={specialization}
              />
            ))}
          </div>
        ) : (
          <DentistsSlider />
        )}

        <p className="info">
          Contact Our Expert Team Memeber To Take Our <span>Best Policies</span>
        </p>
        <div className="schedule" data-aos="fade-up">
          <h5>Agende uma avaliação</h5>
          <div>
            <Link color="primary" variant="primary" target="_blank">
              AGENDAR AGORA
            </Link>
            <Link color="secondary" variant="primary" href="como-chegar">
              COMO CHEGAR
            </Link>
          </div>
        </div>
      </Container>
    </SectionStyled>
  );
};

export default Dentists;
