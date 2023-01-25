import styled from "styled-components";

export const ReviewCardStyled = styled.div`
  min-width: 236px;
  max-width: 296px;
  min-height: 306px;
  max-height: 306px;
  background: #132038;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .starts {
    display: flex;
    gap: 5px;
    svg {
      color: #fcaf3d;
    }
  }
  .review {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 34px;
    color: #ffffff;

    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }

  .info {
    display: flex;
    height: 48px;
    gap: 0.8rem;
    align-items: center;
    .photo {
      width: 48px;
      height: 48px;
      background: #747474;
      mix-blend-mode: luminosity;
      border-radius: 52px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      justify-content: space-around;

      span {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;

        color: #ffffff;
      }

      p {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;

        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #a3a6ae;
      }
    }
  }

  @media (min-width: 1200px) {
    /* min-width: 236px;
    min-height: 306px; */

    min-width: 322px;
    min-height: 363px;
  }
`;
