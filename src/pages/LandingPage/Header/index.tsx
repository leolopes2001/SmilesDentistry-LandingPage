import { Container } from "../../../components/common/Container/style";
import { navLinks, contact_info } from "../../../components-mock.json";
import Link from "../../../components/common/Link";
import { useCallback, useState } from "react";
import Phone from "../../../assets/svgs/icons/phone.svg";
import Points from "../../../assets/svgs/icons/points.svg";
import Logo from "../../../assets/svgs/icons/logoDefault.svg";
import { HeaderStyled } from "./style";
import Title from "../../../components/common/Title";

const Header = () => {
  const [currentNavLink, setCurrentNavLink] = useState("home");

  const handleNavLinkClick = useCallback(
    (id: string) => setCurrentNavLink(id),
    []
  );

  return (
    <HeaderStyled>
      <Container variant="big">
        <div className="logo_container">
          <img src={Logo} alt="Company Logo" />
          <Title variant="logo" tag="h1">OdontoSorrisos</Title>
        </div>
        <nav>
          {navLinks.map(({ id, name }) => (
            <Link
              key={id}
              href="id"
              variant="secondary"
              className={currentNavLink === id ? "active" : ""}
              onClick={() => handleNavLinkClick(id)}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="contact_container">
          <img src={Phone} alt="Phone" />
          <p>{contact_info.phone}</p>
          <img src={Points} alt="Points" />
        </div>
        <Link color="primary" variant="primary">
          AGENDAR AGORA
        </Link>
      </Container>
    </HeaderStyled>
  );
};
export default Header;
