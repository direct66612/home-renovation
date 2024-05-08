import styled from "styled-components";

export const Section = styled("section")`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .title {
    font-size: 70px;
    margin-bottom: 15px;
  }
  .container-box {
    margin-bottom: 20px;
  }
  .service__info-title {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .title span {
    color: #e89f71;
  }
  .text {
    width: 450px;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  img {
    width: 530px;
    object-fit: cover;
    height: auto;
  }
  .services__img-box {
    display: flex;
    gap: 30px;
  }
  @media screen and (min-width: 375px) {
    img {
      width: 325px;
    }
    .services__img-box {
      flex-direction: column;
    }
    .text {
      width: 325px;
    }
  }
  @media screen and (min-width: 768px) {
    img {
      width: 430px;
    }
    .services__img-box {
      flex-direction: column;
    }
    .text {
      width: 400px;
    }
  }
  @media screen and (min-width: 1440px) {
    img {
      width: 530px;
    }
    .services__img-box {
      flex-direction: row;
    }
    .text {
      width: 450px;
    }
  }
`;
