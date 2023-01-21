import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStyled = styled.section`
  /* height: 100vh; */
  ${Container} {
    .header {
      display: flex;
      flex-direction: column-reverse;
      img {
        width: 100%;
        max-width: 359px;
        height: 252px;
        align-self: center;
        text-align: center;
      }
      div {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;

        ${BaseTitle} {
          color: #000e29;
          text-align: left;
          justify-content: flex-start;
          margin-bottom: 17px;
        }

        p {
          font-family: "Archivo";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 26px;
          color: #747474;
          max-width: 600px;

          @media (min-width: 800px) {
            font-size: 15px;
          }
        }
      }

      @media (min-width: 1000px) {
        flex-direction: row;

        img {
          max-width: 526px;
          height: 319px;
        }

        div {
          justify-content: flex-start;
          gap: 10px;
        }

        ${BaseTitle} {
          margin-bottom: 0;
        }
      }
    }

    .info {
      text-align: center;
      font-family: "Archivo";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;
   

        margin-top: 10rem;
      color: #747474;
    }

    .schedule {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      width: 100%;
      max-width: 1290px;
      height: 211px;
      padding: 1rem;
      background: #d9d9d9;
      border-radius: 20px;
      gap: 1rem;
      margin-top: 2rem;
      margin-bottom: 5rem;

      h5 {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 105.5%;
        text-align: center;
        display: flex;
        align-items: center;
        letter-spacing: -0.01em;
        color: #ffffff;

        @media (min-width: 800px) {
          font-size: 40px;
        }
      }

      div {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
      }
      ${LinkStyled} {
        width: 135px;
        height: 48px;

        @media (min-width: 1000px) {
          width: 204px;
          height: 58px;
        }
      }

      @media (min-width: 400px) {
        height: 161px;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem;
      }

      @media (max-height: 760px) {
        /* background-color: red; */
      }
    }
  }
`;
