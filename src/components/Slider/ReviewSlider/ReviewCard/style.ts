import styled from "styled-components";

export const ReviewCardStyled = styled.div`
  width: 356px;
  height: 378px;
  width: 296px;
height: 306px;
  background: #132038;
  box-shadow: 0px 50px 57px rgba(0, 13, 39, 0.78);
  border-radius: 20px;

  .starts {
    display: flex;
  }
  .review {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 34px;
    color: #ffffff;
  }

  .info {
    display: flex;
    height: 48px;

    .photo {
      width: 51px;
      height: 48px;
      background: #747474;
      mix-blend-mode: luminosity;
      border-radius: 52px;
    }

    .info {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      span {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #ffffff;
      }

      p {
        font-family: "Archivo";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 64px;

        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #a3a6ae;
      }
    }
  }

  @media (min-width: 800px) {
    width: 418px;
    height: 470px;
  }
`;

// <div className="starts">
// <AiFillStar />
// <AiFillStar />
// <AiFillStar />
// <AiFillStar />
// <AiFillStar />
// </div>
// <p className="review">
// {review}
// </p>
// <div className="info">
// <div className="photo"></div>
// <div className="name">
