import styled, { css } from "styled-components";

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
};

export const ButtonStyled = styled.button<{
  variant?: "form_button" | "fotter";
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
`;
