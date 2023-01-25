import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStyled = styled.section`
  ${Container} {
    .dentists_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .center{
      justify-content: space-evenly;

    }
    .header {
      display: flex;
      flex-direction: column-reverse;

      img {
        width: 90%;
        max-width: 400px;
        align-self: flex-start;
        text-align: center;
      }
      div {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;

        ${BaseTitle} {
          color: #000e29;
          text-align: left;
          justify-content: flex-start;
          margin-bottom: 17px;
          font-size: 40px;
          @media (min-width: 1200px) {
            font-size: 48px;
          }
        }

        p {
          font-family: "Archivo";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 26px;
          color: #747474;
          max-width: 600px;
          margin-bottom: 2rem;

          @media (min-width: 800px) {
            font-size: 14px;
          }

          @media (min-width: 1200px) {
            margin-bottom: 0rem;
          }
        }
      }

      @media (min-width: 1000px) {
        flex-direction: row;
        img {
          max-width: 500px;
          height: 349px;
        }

        div {
          padding: 4rem 0;
          padding-top: 7rem;
          justify-content: space-between;
          gap: 10px;
          margin: 0;
        }

        ${BaseTitle} {
          margin-bottom: 0;
        }
      }

      @media (min-width: 1200px) {
        gap: 2rem;

        div {
          padding: 3rem 0;
          justify-content: end;
          gap: 10px;
          margin: 0;
        }

        img {
          max-width: 539px;
          height: 322px;
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
      margin-top: 60px;
      color: #747474;

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .schedule {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      width: 100%;
      max-width: 1290px;
      height: 260px;
      padding: 1rem;
      background: #9ea2a9;
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

        @media (min-width: 900px) {
          font-size: 40px;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      ${LinkStyled} {
        width: 150px;
        height: 48px;
        font-size: 12px;

        @media (min-width: 1000px) {
          width: 186px;
          height: 58.5px;
          font-size: 14px;
        }
      }

      ${LinkStyled}:nth-of-type(2) {
        width: 192px;
      }

      @media (min-width: 1200px) and (max-height: 750px) {
        ${LinkStyled} {
          font-size: 12px;
          width: 156px;
          height: 49.8px;
        }

        ${LinkStyled}:nth-of-type(2) {
          width: 182px;
        }
      }

      @media (min-width: 600px) {
        height: 161px;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem;
      }

      @media (min-width: 900px) {
        div {
          flex-direction: row;
        }
      }

      @media (max-height: 760px) and (min-width: 1100px) {
        height: 140px;
        max-height: 160px;
      }
    }
  }
`;
