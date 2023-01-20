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
  transform: translateX(-50%) translateY(-22%);
  flex-direction: column;
  justify-content: flex-end;
  max-width: 852px;

  ${BaseTitle} {
    overflow: visible;
    text-align: center;
    margin-bottom: 5%;
    position: relative;
    z-index: 9999999999;

    span {
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
  }

  p {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 5%;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 30px;
    ${LinkStyled}:nth-of-type(1) {
      width: 190px;
      height: 58px;

      @media (max-height: 700px) {
        width: 156px;
        height: 46px;
      }
    }
    ${LinkStyled}:nth-of-type(2) {
      width: 224px;
      height: 58px;

      @media (max-height: 700px) {
        width: 176px;
        height: 46px;
      }
    }
  }

  @media (max-height: 700px) {
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
  }
`;
