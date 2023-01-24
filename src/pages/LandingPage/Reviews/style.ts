import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStlyed = styled.section`
  height: 95vh;
  width: 100vw;
  position: relative;
  > div {
    position: absolute;
  }
 
  ${Container} {
    position: absolute;
    z-index: 9999;
    width: 100%;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > img {
    object-fit: cover;
    width: 100vw;
    height: 95vh;
    position: relative;
    z-index: -1;
  }

  .title_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -65%);
    z-index: 99999999;

    ${Text} {
      margin-bottom: 20px;

      @media (min-width: 800px) {
        margin-bottom: 30px;
      }
    }
    ${BaseTitle} {
      color: white;
      position: relative;
      z-index: 9999999999;
      align-items: center;
      justify-content: center;
      text-align: center;
      max-width: 600px;
      display: block;
      width: 400px;
      font-size: 32px;

      @media (min-width: 800px) {
        width: 600px;
        font-size: 40px;
      }

      @media (max-height: 700px) and (min-width: 800px){
        font-size: 40px;
        width: 400px;
      }
    }
  }
`;
