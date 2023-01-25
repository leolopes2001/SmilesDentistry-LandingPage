import styled from "styled-components";

export const DentistsCardStyled = styled.div`
  width: 100%;
  max-width: 250px;
  height: 401px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 2rem;
  .img_box {
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 90%;
    }
  }

  .name_box {
    text-align: center;
    h6 {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.01em;
      color: #000e29;
      justify-content: center;
    }

    p {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #747474;
      justify-content: center;
    }
  }

  .hover_box {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 52px;
   

    > div {
      transition: all 300ms;
      height: 52px;
      width: 100%;
      background: #ffffff;
      border: 1px solid #f5f5f5;
    }
  }

    &:hover .hover_box {
    cursor: pointer;
    div:nth-of-type(1) {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    div:nth-of-type(2) {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
