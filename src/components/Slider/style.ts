import styled, { css } from "styled-components";
import { Container } from "../common/Container/style";

const SliderWrapVariant = {
  type1: css`
    .swiper {
      width: 100%;
    }

    .swiper-slide {
      background: #fff;
      inset: 0;
      width: 100vw;
      height: 100vh;

      img {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
      }

      ::after {
        content: "";
        background-color: #000e29;
        position: absolute;
        inset: 0;
        width: 100vw;
        opacity: 0.5;
        height: 100vh;
        z-index: 999;
        pointer-events: none;
      }
    }

    .prevButton,
    .nextButton {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      transition: all 300ms;
      background-color: transparent;
      position: absolute;
      z-index: 9999;

      :hover {
        filter: brightness(1.2);
      }
    }

    .prevButton {
      top: 45%;
      left: 10%;

      .arrow {
        position: absolute;
        top: 55%;
        left: 18%;
        transform: rotateY(180deg) translate(-50%, -50%);
      }
    }

    .nextButton {
      top: 45%;
      right: 10%;

      .arrow {
        position: absolute;
        top: 45%;
        left: 55%;
        transform: translate(-50%, -50%);
      }
    }
  `,
};
export const SliderWrap = styled.div<{
  variant: "type1";
}>`
  ${({ variant }) => SliderWrapVariant[variant]}
`;
