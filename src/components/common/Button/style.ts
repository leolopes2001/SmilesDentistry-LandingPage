import styled, { css } from "styled-components";
import convertToRem from "../../../utils/convertToRem";

const ButtonVariant = {
  default: css``,
  form_button: css`
    padding: 18px 40px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.whiteFixed};
  `,
  fotter: css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 41px;
    gap: 10px;
    position: absolute;
    width: 164px;
    height: 55px;
    background: #2ca2fb;
    border-radius: 91px;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  primary: css`
    font-family: "Archivo";
    font-style: normal;
    cursor: pointer;
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

    transition: filter 300ms;
    :hover {
      filter: brightness(1.2);
    }
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
export const ButtonStyled = styled.button<{
  variant?: "form_button" | "fotter" | "primary";
  color?: "primary" | "secondary";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-style: normal;
  transition: all 300ms;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ variant }) => ButtonVariant[variant || "default"]}
  ${({ color }) => ColorVariant[color || "default"]}
`;
