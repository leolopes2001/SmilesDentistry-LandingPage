import { Container } from "../../../components/common/Container/style";
import { navLinks, contact_info } from "../../../components-mock.json";
import Link from "../../../components/common/Link";
import { useCallback, useState } from "react";
import Logo from "../../../assets/svgs/icons/logoDefault.svg";
import { HeaderStyled, MobileContainer } from "./style";
import Title from "../../../components/common/Title";
import useWindowSize from "../../../hooks/useWindowSize";
import MobileMenu from "../../../components/MobileMenu";
import { useEffect } from "react";
import { useMemo } from "react";

import { ReactComponent as Phone } from "../../../assets/svgs/icons/phone.svg";
import Points from "../../../assets/svgs/icons/points.svg";

const Header = () => {
  const [currentNavLink, setCurrentNavLink] = useState("home");
  const [isOutOfPosition, setIsOutOfPosition] = useState(false);

  const [width] = useWindowSize();

  const handleNavLinkClick = useCallback(
    (id: string) => setCurrentNavLink(id),
    []
  );

  const changeBgHeader = useCallback(() => {
    if (window.scrollY > 0) {
      setIsOutOfPosition(true);
    } else {
      setIsOutOfPosition(false);
    }
  }, []);

  useEffect(() => {
    changeBgHeader();

    window.addEventListener("scroll", changeBgHeader);

    () => {
      window.removeEventListener("scroll", changeBgHeader);
    };
  }, []);

  return (
    <HeaderStyled isOut={isOutOfPosition}>
      {width > 1200 ? (
        <Container variant="big">
          <div className="logo_container">
            <img src={Logo} alt="Company Logo" />
            <Title variant="logo" tag="h1">
              OdontoSorrisos
            </Title>
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
            <Phone className={isOutOfPosition ? "phone white" : "phone"} />

            <p>{contact_info.phone}</p>
            <img src={Points} alt="Points" />
          </div>
          <Link color="primary" variant="primary">
            AGENDAR AGORA
          </Link>
        </Container>
      ) : (
        <MobileContainer>
          <div className="logo_container">
            <img src={Logo} alt="Company Logo" />
            <Title variant="logo" tag="h1">
              OdontoSorrisos
            </Title>
          </div>
          <MobileMenu />
        </MobileContainer>
      )}
    </HeaderStyled>
  );
};
export default Header;
