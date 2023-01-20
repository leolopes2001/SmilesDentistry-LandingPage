import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStyled = styled.section`
  height: 100vh;
  width: 100vw;

  > img {
    object-fit: cover;
    width: 100vw;
    height: 110vh;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    position: absolute;
    inset: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .title_box {
      max-width: 500px;
      margin-top: 2rem;
      text-align: center;

      > ${BaseTitle} {
        margin-top: 20px;
        font-size: 40px;
        text-align: center;
      }
    }

    .info_box {
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
        /* display: none; */

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
          /* width: 100%; */
        }
        svg {
          /* width: 30px; */
          
        }
        img {
          width: 30px;
          height: 30px;
        }
      }

      .link {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
        svg{
          left: -25px;
          position: absolute;
        }
        ${LinkStyled} {
          width: 135px;
          height: 48px;
        }
      }
    }

    img {
      height: 50px;
      max-width: 50px;
    }
  }
`;
