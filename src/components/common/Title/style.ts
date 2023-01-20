import styled, { css } from "styled-components";
import convertToRem from "../../../utils/convertToRem";
import MaskTitle from "./maskTitle";

const TitleVariant = {
  logo: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #ffffff;
  `,

  title1: css`
    font-weight: 700;
    font-size: 60px;
    letter-spacing: -0.01em;
    color: #ffffff;
  `,

  title2: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 105.5%;
    letter-spacing: -0.01em;
    color: #000e29;

    span {
      color: ${({theme}) => theme.colors.primary};
    }

    @media (min-width: 800px) {
      font-size: 55px;
    }
  `,

  title3: css`
    font-weight: 600;
    font-size: 55px;
    line-height: 105.5%;
    letter-spacing: -0.01em;
    color: #ffffff;
  `,

  title4: css`
    font-weight: 500;
    font-size: 22px;
    line-height: 105.5%;
    letter-spacing: -0.01em;
    color: #ffffff;
  `,
  title5: css`
    font-weight: 600;
    font-size: 35px;
    line-height: 105.5%;
    letter-spacing: -0.01em;
    color: #ffffff;
  `,
};

export const BaseTitle = styled(MaskTitle)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Archivo";
  font-style: normal;
  ${({ variant }) => TitleVariant[variant]}
`;
