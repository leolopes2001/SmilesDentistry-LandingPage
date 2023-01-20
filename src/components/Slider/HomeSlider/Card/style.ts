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
  transform: translateX(-50%) translateY(-25%);
  flex-direction: column;
  justify-content: flex-end;

  max-width: 852px;

  ${BaseTitle} {
    height: 185px;
    text-align: center;
    margin-bottom: 46px;
    position: relative;
    z-index: 9999999999;

    span {
      position: relative;
      z-index: 999999;
    }
    .title_style {
      position: absolute;
      z-index: 999;
      inset: 0;
      top: 20px;

      left: 2.4%;
      transform: rotate(-0.5deg);

      max-width: 333.59px;
      min-width: 333.59px;
      max-height: 63.65px;
      min-height: 63.65px;
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
    margin-bottom: 65px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 30px;
    ${LinkStyled}:nth-of-type(1) {
      width: 204px;
    }
    ${LinkStyled}:nth-of-type(2) {
      width: 244px;
    }
  }
`;
