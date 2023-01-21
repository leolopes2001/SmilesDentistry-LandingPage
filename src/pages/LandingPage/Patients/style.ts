import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStlyed = styled.section`
  margin-top: 5rem;

  .title_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${Text} {
      margin-top: 50px;
      margin-bottom: 30px;
    }

    ${BaseTitle} {
      text-align: center;
      color: #000e29;
    }
  }

  .link_box {
    width: 100%;
    display: flex;
    justify-content: center;

    ${LinkStyled} {
      width: 180px;
      height: 50px;

      @media (min-width: 1000px) {
        width: 223px;
        height: 58px;
      }
    }
  }

  ${Container}{
    display: flex;
    ul .card{
      display: flex;
    }

    form{
      display: flex;
      flex-direction: column;
    }
  }
`;
