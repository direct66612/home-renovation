import styled from "styled-components";

export const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  padding-top: 100px;
  border-top: 1px solid #d8d8d8;
  align-items: center;
  .logo {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  .phone__container {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .our__projects {
    display: flex;
    flex-direction: row;
    gap: 80px;
    font-size: 30px;
  }
  .social {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 25px;
  }
  .social__title {
    font-weight: 700;
    font-size: 35px;
  }
  @media screen and (min-width: 375px) {
    .our__projects {
      display: none;
    }
    .social {
      display: none;
    }
    .info {
      flex-direction: row;
      align-items: center;
    }
  }
  @media screen and (min-width: 768px) {
    .our__projects {
      display: none;
    }
    .social {
      display: none;
    }
    .info {
      flex-direction: row;
      align-items: center;
    }
  }
  @media screen and (min-width: 1440px) {
    .our__projects {
      display: flex;
    }
    .social {
      display: flex;
    }
    .info {
      flex-direction: column;
    }
  }
`;
