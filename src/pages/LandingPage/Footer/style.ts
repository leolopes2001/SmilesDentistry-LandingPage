import styled from "styled-components";
import { ButtonStyled } from "../../../components/common/Button/style";
import { Container } from "../../../components/common/Container/style";
import { Input } from "../../../components/common/Input/style";
import { BaseTitle } from "../../../components/common/Title/style";

export const FooterStyled = styled.footer`
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  ${Container} {
    position: relative;
    z-index: 999;

    li {
      color: #a3a6ae;
    }

    .top_content {
      margin-top: 3rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      border-bottom: 1px solid #253450;
      padding-bottom: 30px;
      margin-bottom: 60px;
    }

    .top_content div h1 {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #ffffff;
    }

    .top_content nav {
      display: flex;
      gap: 8px;
    }

    .top_content .social_media_link {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #132038;
      color: #ffffff;
      border-radius: 50%;
    }

    .list_container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      border-bottom: 1px solid #253450;
      padding-bottom: 30px;
      margin-bottom: 60px;

      @media (min-width: 800px) {
        justify-content: flex-start;
        gap: 5rem;
        flex-direction: row;
      }
    }

    .list_container ul li {
      color: #a3a6ae;
      font-style: normal;
    }

    .list_container ${BaseTitle} {
      margin-bottom: 1rem;
    }
    .list_container ul .type_1_li {
      font-family: "Barlow";
      font-weight: 500;
      font-size: 15px;
      line-height: 32px;
    }
    .list_container ul .type_2_li {
      font-family: "Archivo";
      font-weight: 400;
      font-size: 15px;
      line-height: 32px;
    }
    .list_container ul .type_3_li {
      font-family: "Archivo";
      font-weight: 400;
      font-size: 16px;
      line-height: 40px;
    }

    .all_rights_reserved_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      p,
      a {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 35px;
        color: #ffffff;
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        line-height: 25px;
        svg {
          font-size: 1.5rem;
        }
        :hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  form {
    padding-bottom: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    h6 {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      text-transform: uppercase;

      color: #ffffff;
    }

    .submit_box {
      position: relative;
      width: 100%;
      max-width: 433px;
      ${ButtonStyled} {
        top: 0px;
        right: 0;
        position: absolute;
      }

      ${Input} {
        width: 100%;
        max-width: 433px;
        height: 55px;
      }
    }

    .checkbox {
      display: flex;
      gap: 1rem;
      display: flex;
      align-items: flex-start;

      label {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        /* line-height: 24px; */
        color: #ffffff;
      }
    }
  }
`;
