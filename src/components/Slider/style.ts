import styled, { css } from "styled-components";

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
      z-index: 9999999999999;

      transform: scale(0.7);

      :hover {
        filter: brightness(1.2);
      }

      @media (min-width: 1000px) {
        transform: scale(0.8);
      }
      @media (min-width: 1200px) {
        transform: scale(1);
      }

      @media (max-height: 800px) {
        transform: scale(0.9);
      }

      @media (max-height: 660px) {
        transform: scale(0.8);
      }
      @media (max-height: 600px) {
        transform: scale(0.8);
      }
    }

    .prevButton {
      left: 20%;

      top: 70%;
      .arrow {
        position: absolute;
        top: 55%;
        left: 18%;
        transform: rotateY(180deg) translate(-50%, -50%);
      }
    }

    .nextButton {
      /* top: 45%; */
      /* right: 8.7%; */
      right: 20%;
      top: 70%;
      .arrow {
        position: absolute;
        top: 45%;
        left: 55%;
        transform: translate(-50%, -50%);
      }
    }

    @media (min-width: 800px) {
      .prevButton {
        top: 42%;
        left: 8.7%;
      }

      .nextButton {
        top: 42%;
        right: 8.7%;
      }
    }

    @media (min-width: 1000px) and (max-height: 780px) {
      .prevButton {
        top: 36%;
      }
      .nextButton {
        top: 36%;
      }
    }
    @media (min-width: 1000px) and (max-height: 640px) {
      .prevButton {
        top: 32%;
        transform: scale(0.7);
      }
      .nextButton {
        transform: scale(0.7);
        top: 32%;
      }
    }
  `,
  type2: css`
    width: 100%;
    position: relative;
    z-index: 9999;
    transform: translateY(-10%);
    .swiper {
      margin-top: 0rem 0;

      width: 100%;
      max-width: 350px;
      padding: 3rem 0;
      margin-bottom: 1rem;

      @media (min-width: 1000px) {
        max-width: 100%;
      }
    }

    .swiper-slide {
      width: 309px;
      height: 247px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
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
      position: relative;
      .name {
        bottom: 50px;
        left: 50%;
        width: 400px;
        transform: translateX(-50%);
        text-align: center;
        z-index: 99999999;
        color: red;
        position: absolute;

        font-family: "Archivo";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;

        color: #ffffff;
      }
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
      padding-bottom: 4rem;

      @media (min-width: 1000px) {
        width: 90%;
      }
      @media (min-width: 1200px) {
        width: 80%;
      }
    }

    .swiper-slide {
      width: 322px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: #2ca2fb;
      opacity: 0.3;
    }

    .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
      opacity: 1;
      background: #2ca2fb;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  `,
  type5: css`
    .swiper {
      width: 100%;

      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .swiper-button-prev::after {
        font-size: 40px;
        transform: translateX(-13px);
      }

      .swiper-button-next::after {
        font-size: 40px;
        transform: translateX(13px);
      }
    }
  `,
};
export const SliderWrap = styled.div<{
  variant: "type1" | "type2" | "type3" | "type4" | "type5";
}>`
  min-width: 0;
  ${({ variant }) => SliderWrapVariant[variant]}
`;
