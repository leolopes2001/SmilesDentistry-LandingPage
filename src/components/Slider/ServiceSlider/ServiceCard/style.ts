import styled from "styled-components";

export const ServiceCatdStyled = styled.div`
  width: 309px;
  height: 247px;
  width: 236px;
  height: 229.52px;
  border-radius: 20px;
  background-color: #132038;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  img {
    object-fit: cover;
    transform: translateY(15px);
    min-width: 65.87px;
    min-height: 77px;
    background-color: #132038;
  }
  border: 1px solid transparent;
  transition: border 300ms;
  cursor: pointer;

  h2 {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 105.5%;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
  .hover_points {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .hover_points div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1a4772;
    transition: background-color 300ms;
  }
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    .hover_points div {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
