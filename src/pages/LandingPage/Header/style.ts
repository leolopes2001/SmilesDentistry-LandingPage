import styled, { css } from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { BaseTitle } from "../../../components/common/Title/style";
import convertToRem from "../../../utils/convertToRem";

export const HeaderStyled = styled.header<{ isOut: boolean }>`
  position: fixed;
  z-index: 999999999999;
  width: 100vw;
  height: ${convertToRem(105)};
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 0 0.5rem;
  transition: background-color 300ms;
  height: ${convertToRem(80)};

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
        font-size: 30px;
      }

      img {
        position: relative;
        object-fit: cover;
        top: 18%;
        height: 130%;
        width: 80px;
      }

      @media (min-width: 1200px) and (max-height: 750px) {
        ${BaseTitle} {
          font-size: 28px;
          transform: translateX(-15px);
        }
        img {
          height: 140%;
          width: 80px;
        }
      }

      /* @media (max-height: 800px) {
        ${BaseTitle} {
          font-size: 30px;
        }
      }

      @media (max-height: 700px) {
        img {
          height: 90px;
          width: 70px;
        }
      }
      @media (min-width: 1200px) and (max-height: 750px) {
        ${BaseTitle} {
          font-size: 20px;
          color: black;
        }
        img {
          height: 65px;
          width: 55px;
        }
      } */
    }

    nav {
      padding-bottom: 17px;
      display: flex;
      align-self: flex-end;
      justify-content: center;
      align-items: flex-start;
      min-width: 610px;
      gap: 2rem;

      > ${LinkStyled} {
        align-items: flex-end;
        justify-items: flex-end;
        text-align: left !important;
        position: relative;
        font-size: 16px;

        @media (min-width: 1360px) {
          font-size: 18px;
        }

        @media (min-width: 1500px) {
          font-size: 20px;
        }
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

      @media (min-width: 1360px) {
        min-width: 650px;
        justify-content: end;
      }

      @media (min-width: 1500px) {
        min-width: 750px;
      }

      @media (max-height: 700px) {
        margin-left: 2rem;
      }
      @media (max-height: 750px) and (min-width: 1200px) {
        > ${LinkStyled} {
          font-size: 14px;
        }
        .active::after {
          top: 27px;
        }

        padding-bottom: 8px;

        min-width: 580px;
        margin-left: 2rem;
      }
    }

    .contact_container {
      display: none;
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
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        color: #ffffff;

        @media (min-width: 1360px) {
          font-size: 20px;
        }
        @media (max-height: 680px) {
          font-size: 16px;
        }
        @media (max-height: 750px) and (min-width: 1200px) {
          font-size: 16px;
        }
      }

      @media (min-width: 1330px) {
        display: flex;
      }
      @media (max-height: 750px) and (min-width: 1200px) {
        padding-bottom: 8px;
      }
    }

    > ${LinkStyled} {
      min-width: 180px;
      max-width: 180px;
      height: 65%;
      background: #2ca2fb;
      font-size: 14px;
    }

    @media (max-height: 700px) {
      > ${LinkStyled} {
        min-width: 180px;
        max-width: 180px;
        height: 46px;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 1200px) and (max-height: 750px) {
    height: ${convertToRem(60)};
  }

  ${({ isOut }) =>
    isOut &&
    css`
      background-color: black;
    `}
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  .logo_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${BaseTitle} {
      transform: translateX(-15px);
      font-size: 20px;
    }

    img {
      position: relative;
      object-fit: cover;
      top: 11%;
      height: 80%;
      width: 75px;
    }
    @media (min-width: 800px) {
      img {
        position: relative;
        object-fit: cover;
        top: 11%;
        height: 100%;
        width: 80px;
      }
      ${BaseTitle} {
        font-size: 26px;
      }
    }

    /* @media (max-height: 800px) {
      ${BaseTitle} {
        font-size: 25px;
      }
    }

    @media (max-height: 700px) {
      img {
        height: 90px;
        width: 70px;
      }
    } */
  }
`;
