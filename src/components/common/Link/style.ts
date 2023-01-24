import styled, { css } from "styled-components";
import { ILinkProps } from ".";
import convertToRem from "../../../utils/convertToRem";

const LinkVariant = {
  primary: css`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${convertToRem(91)};
    line-height: ${convertToRem(64)};
    text-transform: uppercase;

    @media (min-width: 1000px) {
      font-size: ${convertToRem(14)};
    }

    @media (max-height: 700px) {
      font-size: 14px;
    }
  `,
  secondary: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: ${convertToRem(20)};
    line-height: ${convertToRem(23)};
    color: ${({ theme }) => theme.colors.whiteFixed};
  `,
};

const ColorVariant = {
  default: css`
    background-color: transparent;
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
};

export const LinkStyled = styled.a<ILinkProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Archivo";
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  ${({ variant }) => LinkVariant[variant || "primary"]}
  ${({ color }) => ColorVariant[color || "default"]}
`;
