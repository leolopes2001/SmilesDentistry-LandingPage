import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;

  position: relative;
  overflow: hidden;

  .shape {
    object-fit: cover;
    position: absolute;
    bottom: -400px;
    height: 600px;
    z-index: 9999;
    width: 100%;
  }

  .btn {
    position: absolute;
    top: 50%;
    width: 400px;
    height: 400px;
    background-color: red;
    z-index: 9999999;
  }

  .btn2 {
    position: absolute;
    top: 50%;
    width: 400px;
    height: 400px;
    background-color: red;
    z-index: 9999999;
    left: 40%;
  }
`;
