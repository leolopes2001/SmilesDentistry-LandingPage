import styled, { css } from "styled-components";

const ButtonVariant = {
  form_button: css`
    padding: 18px 40px;
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 10px;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.whiteFixed};
  `,
};

export const ButtonStyled = styled.button<{ variant: "form_button" }>`
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
    filter: brightnees(1.2);
  }

  ${({ variant }) => ButtonVariant[variant]}
`;
