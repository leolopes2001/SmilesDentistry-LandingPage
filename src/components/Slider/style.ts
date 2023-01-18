import styled, { css } from "styled-components";

const SliderWrapVariant = {
  type1: css``,
};
export const SliderWrap = styled.div<{
  variant: "type1";
}>`
  ${({ variant }) => SliderWrapVariant[variant]}
`;
