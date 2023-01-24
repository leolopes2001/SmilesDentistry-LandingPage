import styled, { css } from "styled-components";

const InputVariant = {
  patients: css`
    width: 100%;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: #a9a9a9;
    padding-left: 20px;
    background: #f9f9f9;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
  `,
  fotter: css`
    background: #132038;
    border-radius: 67px;
    border: none;
    padding-left: 21px;

    ::placeholder {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: #475063;
    }
  `,
};

export const Input = styled.input<{ variant: "fotter" | "patients" }>`
  ${({ variant }) => InputVariant[variant]}
`;
