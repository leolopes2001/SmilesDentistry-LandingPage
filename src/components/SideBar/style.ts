import styled, { css, keyframes } from "styled-components";
import convertToRem from "../../utils/convertToRem";
import { LinkStyled } from "../common/Link/style";

const fade = keyframes`
  from{
    opacity: 0;
    transform: translateY(-180px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SideBarStyled = styled.aside<{
  isSideBarOpen: boolean;
  variant: "main_side_bar";
}>`
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: 60vw;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  transform: translateX(-100%);
  transition: transform 0.5s ease-in;
  z-index: 999999999999999999999999999999;
  overflow: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
  .info_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    .contact_container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      margin-top: 4rem;

      img {
        width: 14px;
      }
      svg {
        transform: scale(0.8);
      }
      p {
        font-size: 12px;
      }
    }
    ${LinkStyled} {
      justify-self: center;
      align-self: center;
      height: 48px;
      width: 135px;
      font-size: 12px;
    }
  }

  nav {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;
    a {
      font-size: 12px;
      color: black;
    }

    .animation {
      animation: ${fade} 800ms;
    }

    .active {
      font-weight: 800;
      font-size: ${convertToRem(16)};
      line-height: ${convertToRem(23)};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 550px) {
    width: 40vw;
  }
  @media (min-width: 650px) {
    width: 30vw;
  }
`;

export const Overlay = styled.div<{ isSideBarOpen: boolean }>`
  position: fixed;
  inset: 0;
  top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  transition: background-color 200ms;
  pointer-events: none;
  z-index: 99999999999999999999;
  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      pointer-events: auto;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.3);
    `}
`;
