import { Container } from "../../../components/common/Container/style";
import { FooterStyled } from "./style";
import {social_media} from "../../../components-mock.json"
const Footer = () => {
  return (
    <FooterStyled>
      <Container variant="normal">
            <div>
                <div>
                    <img src="" alt="" />
                    <h1>OndontosSorrisos</h1>
                </div>
                <nav>
                    {Object.keys(social_media).map((el) => <a>el</a>)}
                </nav>
            </div>
            <section>
                <div>
                    <h3></h3>
                    <ul></ul>
                </div>
                <div>
                    <h3></h3>
                    <ul></ul>
                </div>
                <div>
                    <h3></h3>
                    <ul></ul>
                </div>
                <div>
                    <h3></h3>
                    <ul></ul>
                </div>
                <form action="">

                </form>

            </section>
            <div>
                <p>© 2023 AgendaConsulta website. All Rights Reserved.</p>
                <a href="#home">Voltar para Home</a>
            </div>
      </Container>
    </FooterStyled>
  );
};
export default Footer;
