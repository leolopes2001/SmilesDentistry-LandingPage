import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStyled = styled.section`
  max-width: 100vw;
  height: auto !important;
  background-color: ${({ theme }) => theme.colors.background1};
  position: relative;
  margin-top: 10rem;
  margin-bottom: 10rem;
  .boardTop {
    top: -180px;
    object-fit: cover;
    position: absolute;
    height: 500px;
    min-height: 350px;
    transform: scaleX(-1);
    z-index: 999;
    width: 100vw;
    min-width: 100vw;
    pointer-events: none;
  }
  .boardBottom {
    object-fit: cover;
    position: absolute;
    bottom: -150px;
    height: 500px;
    min-height: 350px;
    transform: scaleX(-1);
    z-index: 999;
    width: 100vw;
    min-width: 100vw;
    pointer-events: none;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    overflow-y: visible;
    overflow-x: visible;
    position: relative;
    width: 100vw;

    height: auto;
    min-height: 900px;
    background-color: ${({ theme }) => theme.colors.background1};
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .title_box {
      position: relative;
      z-index: 99999999;
      max-width: 500px;
      text-align: center;

      > ${BaseTitle} {
        margin-top: 20px;
        font-size: 40px;
        text-align: center;
      }
    }

    .info_box {
      position: relative;
      z-index: 99999;
      width: 100%;
      overflow: hidden;
      max-width: 350px;
      margin-bottom: 2rem;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.background2};
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 1rem;
      height: 300px;
      position: relative;
      > ${BaseTitle} {
        font-size: 26px;
        max-width: 160px;
      }

      .board1,
      .board2 {
        position: absolute;
    
        path {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
      .board1 {
        top: -11px;
        left: 0;
      }
      .board2 {
        transform: scale(-1);
        bottom: -13px;
        right: -20px;
        path {
          fill: ${({ theme }) => theme.colors.secondary};
        }

        @media (min-width: 1001px) {
          transform: scale(1);
          right: -3px;
        }
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 0.8rem;

        p {
          font-family: "Archivo";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 64px;
          color: #ffffff;
          
        }
      
        img {
          width: 30px;
          height: 30px;
        }
    
        @media (min-width: 1000px) {
          width: 200px;
        }
      }

      .link {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
        svg {
          left: -23px;
          position: absolute;

          circle {
            fill: ${({ theme }) => theme.colors.secondary};
          }
        }

        ${LinkStyled} {
          font-size: 12px;
          width: 135px;
          height: 48px;

          @media (min-width: 1000px) {
            font-size: 12px;
            width: 155px;
            height: 54.5px;
          }

          @media (min-width: 1200px) and (max-height: 750px) {
            width: 155px;
            height: 49.8px;
          }
        }
      }

      @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-evenly;
        max-width: 900px;
        height: 151px;
      }
      @media (min-width: 1200px) {
        max-width: 1000px;
        justify-content: space-evenly;
        padding: 0 1.5rem;
        > ${BaseTitle} {
          font-size: 28px;
          max-width: 290px;
        }
      }
    }

    img {
      height: 50px;
      max-width: 50px;
    }
  }

  .list_services {
    max-width: 1000px;
    gap: 18px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 999999999;
  }
`;
