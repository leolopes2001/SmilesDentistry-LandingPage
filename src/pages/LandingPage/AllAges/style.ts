import styled from "styled-components";
import { LinkStyled } from "../../../components/common/Link/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStyled = styled.section`
  width: 100%;
  height: 105vh;
  padding: 1rem;
  ${LinkStyled} {
    width: 135px;
    height: 48px;

    @media (min-width: 1000px) {
      width: 204px;
      height: 58px;
    }
  }

  > p {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 70px;

    text-align: center;

    color: #292930;
    @media (min-width: 800px) {
      line-height: 103px;
      font-size: 20px;
    }
  }

  > .navigation_box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  > .content_box {
    
    .text_box {
      ${Text} {
        margin-top: 42px;
        margin-bottom: 17px;
      }

      p:nth-of-type(2) {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 26px;
        color: #747474;
        min-height: 126px;
        max-height: 156px;
        margin-bottom: 1rem;
        width: 268px;
        @media (min-width: 800px) {
          font-size: 15px;
          width: 450px;
        }
      }

      ${BaseTitle} {
        display: block;
        width: 287px;
        margin-bottom: 9px;
        @media (min-width: 800px) {
          margin-bottom: 45px;
          height: 99px;
          width: 548px;
        }
      }
    }
    .text_link_box {
      display: flex;
      gap: 0.5rem;
    }

    .img_box {
      overflow: hidden;
      display: flex;
      justify-content: center;
      svg {
        margin-top: 1rem;
      
        display: flex;
        text-align: left;
        path {
          transform: translate(-12%, -10%);
        }
      }
    }

    @media (min-width:850px){
      display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    }
  }
`;
