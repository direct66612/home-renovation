import styled from "styled-components";

export const Container = styled("header")`
  width: 100%;
  font-size: 30px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 120px;
    align-items: center;
  }
  .logo {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  .header__icon-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .header__icon {
    width: 50px;
    height: 50px;
    background-color: #e89f71;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  @media screen and (min-width: 375px) {
    .header__icon-container {
      display: none;
    }
    ul {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    .header__icon-container {
      display: none;
    }
    ul {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    .header__icon-container {
      display: flex;
    }
    ul {
      flex-direction: row;
      gap: 120px;
      margin-bottom: 0px;
    }
  }
`;
