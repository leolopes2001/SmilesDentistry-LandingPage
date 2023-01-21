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

      @media (max-height: 800px) {
        transform: scale(0.9);
      }

      @media (max-height: 660px) {
        transform: scale(0.8);
      }
      @media (max-height: 600px) {
        transform: scale(0.7);
      }
    }

    .prevButton {
      top: 45%;
      left: 8.7%;

      .arrow {
        position: absolute;
        top: 55%;
        left: 18%;
        transform: rotateY(180deg) translate(-50%, -50%);
      }
    }

    .nextButton {
      top: 45%;
      right: 8.7%;

      .arrow {
        position: absolute;
        top: 45%;
        left: 55%;
        transform: translate(-50%, -50%);
      }
    }
  `,
  type3: css`
    .swiper {
      width: 100%;
      margin-top: 3rem;
      padding: 2rem;
      padding-bottom: 0;
    }

    .swiper-slide {
      width: 366px;
      height: 302px;
      display: flex;
      justify-content: center;
      text-align: center;
      .up,
      .down {
        width: 366px;
        height: 302px;
        width: 100%;

        img {
          max-width: 366px;
          max-height: 262px;
          width: 100%;
          min-width: 200px;
          height: 90%;
          border-radius: 20px;
        }
      }
      .up {
        transform: translateY(20px);
      }
      .down {
        transform: translateY(-20px);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    @media (max-height: 780px) {
      .swiper-slide {
        /* width: 488px;
        height: 382px; */
        .up,
        .down {
          /* height: 292px; */
          /* width: 100%; */
          /* max-width: 288px; */
        }
      }
    }
  `,
  type4: css`

    .swiper {
      width: 100%;
    
    }

    .swiper-slide {
      width: 418px;
      height: 470px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  `,
};
export const SliderWrap = styled.div<{
  variant: "type1" | "type3" | "type4";
}>`
  min-width: 0;
  ${({ variant }) => SliderWrapVariant[variant]}
`;
