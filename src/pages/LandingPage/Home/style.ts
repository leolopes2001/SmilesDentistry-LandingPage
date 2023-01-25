import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden !important;

  
  .shape {
    object-fit: cover;
    position: absolute;
    bottom: -420px;
    height: 600px;
    z-index: 99;
    width: 100%;
    pointer-events: none;
  }
`;
