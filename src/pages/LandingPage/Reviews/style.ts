import styled from "styled-components";
import { Container } from "../../../components/common/Container/style";
import { Text } from "../../../components/common/Text/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const SectionStlyed = styled.section`
  height: 100vh;
  /* width: 100vw; */
  /* max-width: 100vw; */
  position: relative;
  /* overflow: hidden; */
  > div {
    position: absolute;
  }

  ${Container} {
    position: absolute;
    z-index: 9999;
    width: 100%;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -45%);
  }

  > img {
    object-fit: cover;
    /* width: 100vw; */
    width: 100%;
    
    height: 100vh;
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
    transform: translate(-50%, -40%);
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
      max-width: 360px;
      display: block;
      width: 100%;
      min-width: 270px;
      font-size: 28px;
      span {
        width: 100%;
      }
      @media (min-width: 800px) {
        max-width: 500px;
        font-size: 40px;
      }

      @media (max-height: 700px) and (min-width: 800px) {
        font-size: 40px;
        max-width: 500px;
      }
    }
  }

  @media (min-width: 1200px) and (max-height: 750px) {
    height: 120vh;
    img {
      height: 120vh;
    }
  }
`;
