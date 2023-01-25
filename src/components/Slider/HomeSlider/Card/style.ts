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
    max-width: 300px;
    min-width: 300px;
    align-self: center;
    justify-self: center;

    span {
      width: 100%;
      max-width: 400px;
      position: relative;
      z-index: 999999;
      overflow: visible;
      min-width: 100%;
    }
    .title_style {
      position: absolute;
      z-index: 999;
      inset: 0;
      object-fit: cover;
      left: 1%;
      transform: translateX(2rem) rotate(2deg);
      top: 7px;
      max-width: auto;
      min-width: auto;
      width: auto;
      max-height: 28px;
      min-height: 28px;
    }

    @media (min-width: 400px) {
      max-width: 400px;
      min-width: 400px;

      .title_style {
        transform: translateX(1rem) rotate(2deg);
      }
    }

    @media (min-width: 800px) {
      font-size: 40px;
      max-width: 500px;
      min-width: 500px;

      .title_style {
        top: 10px;
        max-height: 32px;
        min-height: 32px;
      }
    }

    @media (min-width: 1000px) {
      font-size: 50px;
      max-width: 550px;
      min-width: 550px;

      .title_style {
        max-height: 40px;
        min-height: 40px;
      }
    }

    @media (min-width: 1200px) {
      font-size: 60px;
      min-width: 650px;

      .title_style {
        top: 12px;
        max-height: 48px;
        min-height: 48px;
      }
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

    ${LinkStyled}:nth-of-type(1) {
      width: 135px;
      height: 48px;

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
      width: 160px;
      height: 48px;

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
`;
