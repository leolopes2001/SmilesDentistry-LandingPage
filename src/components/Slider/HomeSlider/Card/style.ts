import styled from "styled-components";
import { LinkStyled } from "../../../common/Link/style";
import { BaseTitle } from "../../../common/Title/style";

export const CardStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999999999999999;
  inset: 0;
  display: flex;
  left: 50%;

  transform: translateX(-50%) translateY(-36%);

  flex-direction: column;
  justify-content: flex-end;
  max-width: 852px;

  ${BaseTitle} {
    font-size: 35px;
    overflow: visible;
    text-align: center;
    margin-bottom: 5%;
    position: relative;
    z-index: 9999999999;
    text-align: center;

    span {
      width: 100%;
      max-width: 400px;
      position: relative;
      z-index: 999999;
      overflow: visible;
    }
    .title_style {
      position: absolute;
      z-index: 999;
      inset: 0;
      top: 16px;
      object-fit: cover;
      left: 0;
      transform: rotate(1deg);
      transform: translateX(10%);
      max-width: 270px;
      min-width: 270px;
      max-height: 53px;
      min-height: 53px;
    }

    @media (min-width: 800px) {
      font-size: 40px;
      span {
        max-width: 500px;
      }
    }
    @media (min-width: 1000px) {
      font-size: 50px;
      span {
        max-width: 700px;
      }
    }
    @media (min-width: 1200px) {
      font-size: 60px;
      span {
        max-width: 850px;
      }
    }

    @media (max-height: 700px) and (min-width: 1000px) {
      font-size: 50px;
      span {
        max-width: 700px;
      }
      /* background-color: red; */
    }
  }

  p {
    font-size: 14px;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    max-width: 280px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media (min-width: 800px) {
      margin-bottom: 5%;
      font-size: 14px;
      max-width: 580px;
    }
    @media (min-width: 1000px) {
      margin-bottom: 5%;
      font-size: 18px;
      max-width: 580px;
    }

    @media (max-height: 700px) and (min-width: 1000px) {
      font-size: 16px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    transform: translateY(20%);
    align-items: center;
    /* ${LinkStyled} {
      width: 200px;
      height: 40px;
    } */

    ${LinkStyled}:nth-of-type(1) {
      width: 170px;
      height: 52px;

      @media (min-width: 800px) {
        width: 190px;
        height: 58px;
      }

      @media (min-width: 1000px) and (max-height: 700px) {
        width: 156px;
        height: 46px;
      }
    }

    ${LinkStyled}:nth-of-type(2) {
      width: 190px;
      height: 52px;

      @media (min-width: 800px) {
        width: 224px;
        height: 58px;
      }

      @media (min-width: 1000px) and (max-height: 700px) {
        width: 176px;
        height: 46px;
      }
    }

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  @media (min-width: 800px) {
    transform: translateX(-50%) translateY(-25%);
  }

  /* @media (max-height: 700px) {
    transform: translateX(-50%) translateY(-25%);

    div {
      gap: 15px;
    }

    ${BaseTitle} {
      font-size: 48px;

      .title_style {
        top: 10px;
        left: -0.4%;

        max-width: 220px;
        min-width: 220px;
        max-height: 43px;
        min-height: 43px;
      }
    }
    p {
      margin-bottom: 3%;
    }
  }  */
`;
