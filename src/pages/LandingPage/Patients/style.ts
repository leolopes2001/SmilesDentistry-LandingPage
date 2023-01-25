import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { Input } from "../../../components/common/Input/style";
import { LinkStyled } from "../../../components/common/Link/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStlyed = styled.section`
  margin-top: 5rem;
  overflow: hidden;
  .title_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${Text} {
      margin-top: 50px;
      margin-bottom: 30px;
    }

    ${BaseTitle} {
      text-align: center;
      color: #000e29;
    }
  }

  .link_box {
    width: 100%;
    display: flex;
    justify-content: center;

    ${LinkStyled} {
      width: 180px;
      height: 50px;

      @media (min-width: 1000px) {
        width: 223px;
        height: 58px;
      }
    }
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    gap: 2rem;

    @media (min-width: 1100px) {
      align-items: flex-start;
      flex-direction: row;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      max-width: 463px;
      justify-content: space-between;
    }
    ul .card {
      display: flex;
      align-items: center;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #f2f2f2;
      border-radius: 15px;
      height: 70px;
      padding: 0.5rem;
      transition: all 300ms;
      width: 100%;

      svg:nth-child(1) {
        width: 60px;
        margin-right: 0.5rem;
        path {
          fill: #959aa5;
        }
      }
      svg {
        transition: all 300ms;
        font-size: 1.5rem;
      }
      p {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 105.5%;
        text-align: left;
        width: 100%;

        color: #959aa5;
      }
    }

    ul .card:hover {
      cursor: pointer;
      border: 1px solid #2ca2fb;
      svg:nth-child(1) path {
        fill: #2ca2fb;
      }
      p {
        color: #2ca2fb;
      }
      svg {
        color: #2ca2fb;
      }
    }

    section {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      max-height: 569px;
      max-width: 485px;
    }
    section ${BaseTitle} {
      display: block;
      font-size: 30px;

      margin-bottom: 2rem;

      @media (min-width: 1000px) {
        width: 100%;
        max-width: 550px;
        font-size: 45px;
        
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
      max-width: 471px;
      h3 {
        font-size: 30px;
        margin-bottom: 1rem;
        font-family: "Archivo";
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 105.5%;
        display: flex;
        align-items: center;
        letter-spacing: -0.01em;
        color: #000e29;
      }
      textarea {
        background: #f9f9f9;
        border: 1px solid #f0f0f0;
        border-radius: 10px;
        padding: 20px;
        height: 136px;
      }

      ${Input} {
        height: 50px;
      }

      @media (min-width: 1100px){
        border-left: 1px solid  #F0F0F0;
        padding-left: 2.5rem;
      }
    }
  }
`;
