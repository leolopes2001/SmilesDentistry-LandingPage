import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { BaseTitle } from "../../../components/common/Title/style";
import convertToRem from "../../../utils/convertToRem";

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 999999;
  width: 100vw;
  height: ${convertToRem(105)};
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);

  ${Container} {
    display: flex;

    justify-content: space-between;
    align-items: center;

    .logo_container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      ${BaseTitle} {
        transform: translateX(-10px);
      }

      img {
        position: relative;
        object-fit: cover;
        /* left: -20px; */
        top: 14%;
        height: 105px;
        width: 80px;
      }
    }

    nav {
      padding-bottom: 17px;
      display: flex;
      align-self: flex-end;
      margin-left: 5rem;
      justify-content: center;
      align-items: flex-start;
      min-width: 660px;
      gap: 2rem;

      > ${LinkStyled} {
        align-items: flex-end;
        justify-items: flex-end;
        text-align: left !important;
        position: relative;
      }

      .active {
        font-weight: 800;

        ::after {
          content: "";
          position: absolute;
          height: 2px;
          width: 100%;
          top: 36px;
          height: 4px;
          background: #2ca2fb;
        }
      }
    }

    .contact_container {
      display: flex;
      width: 100%;
      align-items: flex-end;
      justify-content: center;

      height: 100%;
      gap: 13px;
      padding-bottom: 17px;
      img {
        align-self: flex-end;
        transform: translateY(-2px);
      }

      p {
        font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #ffffff;
      }
    }

    > ${LinkStyled} {
      min-width: 204px;
      max-width: 204px;
      height: 65px;
      background: #2ca2fb;
    }
  }
`;
