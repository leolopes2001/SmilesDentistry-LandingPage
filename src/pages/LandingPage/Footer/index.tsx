import { Container } from "../../../components/common/Container/style";
import { FooterStyled } from "./style";
import {
  social_media,
  services,
  howArrive,
  contact_info,
} from "../../../components-mock.json";
import FooterBack from "../../../assets/svgs/background/footerBackNew.svg";
import { FaFacebookF, FaBehance, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineArrowUp } from "react-icons/ai";
import Title from "../../../components/common/Title";
import { Input } from "../../../components/common/Input/style";
import Logo from "../../../assets/svgs/icons/logoReady.svg";
import Button from "../../../components/common/Button";
import { IPages } from "..";

type SocialMediaIconKeys = keyof typeof social_media;

type SocialMediaIconType = {
  [key in SocialMediaIconKeys]: JSX.Element;
};

const SocialMediaIcons: SocialMediaIconType = {
  facebook: <FaFacebookF />,
  behance: <FaBehance />,
  linkedin: <FaLinkedin />,
  twitter: <AiOutlineTwitter />,
  youtube: <FaYoutube />,
};

const Footer = ({id,innerRef}: IPages) => {
  const getSocialMediaJSX = (): JSX.Element[] => {
    return Object.entries(social_media).map(
      ([el, id]: [el: string, id: string]) => (
        <a key={el} href={id} className="social_media_link">
          {SocialMediaIcons[el as SocialMediaIconKeys]}
        </a>
      )
    );
  };
  return (
    <FooterStyled id={id} ref={innerRef}>
      <Container variant="normal">
        <div className="top_content">
          <div>
            <img src={Logo} alt="Comapany Logo" />
            <h1>OndontosSorrisos</h1>
          </div>
          <nav>{getSocialMediaJSX()}</nav>
        </div>
        <section>
          <div className="list_container">
            <div>
              <Title tag="h4" variant="title6">
                SERVIÇOS
              </Title>
              <ul>
                {services.map((el) => (
                  <li className="type_1_li" key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Title tag="h4" variant="title6">
                COMO CHEGAR
              </Title>
              <ul>
                {Object.values(howArrive).map((el) => (
                  <li className="type_2_li" key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Title tag="h4" variant="title6">
                INFORMAÇÕES DE CONTATO
              </Title>
              <ul>
                {Object.values(contact_info).map((el) => (
                  <li className="type_3_li" key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form action="">
            <h6>News Latter</h6>
            <div className="submit_box">
              <Input placeholder="Email" variant="fotter" type="email" />
              <Button color="primary" variant="fotter" type="submit">
                Subscribe
              </Button>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="">
                Eu concordo que meus dados enviados estão sendo coletados e
                armazenados.
              </label>
            </div>
          </form>
        </section>
        <div className="all_rights_reserved_box">
          <a href="#home">
            Voltar para Home
            <AiOutlineArrowUp />
          </a>
          <p>© 2023 AgendaConsulta website. All Rights Reserved.</p>
        </div>
      </Container>

      <img src={FooterBack} alt="" />
    </FooterStyled>
  );
};
export default Footer;
