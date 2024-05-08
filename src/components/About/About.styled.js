import styled from "styled-components";

export const Section = styled("section")`
  display: flex;
  gap: 100px;
  margin-bottom: 50px;
  .title {
    font-size: 70px;
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
    width: 930px;
    object-fit: cover;
  }
  @media screen and (min-width: 375px) {
    flex-direction: column;
    img {
      width: 325px;
    }
    .text {
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    img {
      width: 385px;
    }
    .text {
      width: 450px;
    }
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    img {
      width: 930px;
    }
    .text {
      width: 100%;
    }
  }
`;
export const Reviews = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .reviews__title {
    font-size: 50px;
    margin-bottom: 20px;
  }
  .reviews__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .reviews__info-text {
    font-size: 30px;
    font-weight: 700;
  }
  .reviews__container-img {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  .reviews__info-box {
    background-color: #f4f5f7;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  img {
    width: 500px;
  }
  @media screen and (min-width: 375px) {
    img {
      width: 325px;
    }
  }
  @media screen and (min-width: 768px) {
    img {
      width: 385px;
    }
  }
  @media screen and (min-width: 1440px) {
    img {
      width: 500px;
    }
  }
`;
