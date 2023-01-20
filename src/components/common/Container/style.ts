import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  StyledComponent,
} from "styled-components";
import convertToRem from "../../../utils/convertToRem";

type ContainerType = "normal" | "big";

interface IContainerProps {
  variant?: ContainerType;
}

const ContainerVariant: {
  [key in ContainerType]: FlattenSimpleInterpolation;
} = {
  big: css`
    max-width: 1700px;
    padding: 0;
  `,
  normal: css`
    max-width: 1300px;
  `,
};

export const Container: StyledComponent<
  "div",
  DefaultTheme,
  IContainerProps,
  never
> = styled.div<IContainerProps>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: ${convertToRem(16)};
  /* position: relative;  */

  ${({ variant }) => ContainerVariant[variant || "normal"]}
`;
