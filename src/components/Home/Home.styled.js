import styled from "styled-components";

export const Section = styled("section")`
  display: flex;
  .title {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .title span {
    color: #e89f71;
  }
  .text {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  .phone__container {
    display: flex;
    gap: 10px;
    font-size: 35px;
    align-items: center;
    color: #e89f71;
    margin-bottom: 40px;
  }
  .button__container {
    padding-left: 20px;
    display: flex;
    gap: 20px;
    font-size: 25px;
  }
  .services__btn {
    background: #77474b;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #77474b;
    padding: 15px;
  }
  .services__btn:hover {
    background-color: #000;
  }
  .contact__btn {
    background: 0 0;
    color: #98820e;
    border-radius: 5px;
    border: 1px solid #77474b;
    padding: 15px;
  }
  .contact__btn:hover {
    background-color: #000;
    color: #fff;
  }
  @media screen and (min-width: 375px) {
    flex-direction: column;
    .img__home {
      width: 325px;
    }
    .button__container {
      flex-direction: column;
      gap: 45px;
      margin-bottom: 35px;
    }
  }
  @media screen and (min-width: 768px) {
    .img__home {
      width: 385px;
    }
    .button__container {
      flex-direction: column;
      gap: 45px;
      margin-bottom: 35px;
    }
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    .img__home {
      width: 100%;
    }
    .button__container {
      flex-direction: row;
      gap: 20px;
      margin-bottom: 0px;
    }
  }
`;
