import styled, { css, keyframes } from "styled-components";
import convertToRem from "../../utils/convertToRem";

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
  width: 50vw;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  transform: translateX(-100%);
  transition: transform 0.5s ease-in;
  z-index: 999999999999999999999999999999;
  overflow: hidden;

  nav {
    display: flex;
    height: 100%;
    gap: 4rem;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 40%;

    .animation {
      animation: ${fade} 800ms;
    }

    .active {
      font-weight: 800;
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(23)};
    }
  }
  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      transform: translateX(0);
    `}
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
