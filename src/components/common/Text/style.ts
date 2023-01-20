import styled, { css } from "styled-components";

const TextVariant = {
  labelPage: css`
    position: relative;
    font-weight: 700;
    font-size: 14px;
    line-height: 105.5%;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 17px;
 
    ::after {
      content: "";
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    @media (min-width: 800px) {
    }
  `,
};

export const Text = styled.p<{variant: "labelPage"}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Archivo";
  font-style: normal;

  ${({ variant }) => TextVariant[variant]}
`;
