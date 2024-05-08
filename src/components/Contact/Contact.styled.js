import styled from "styled-components";

export const Section = styled("section")`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .title {
    font-size: 70px;
    margin-bottom: 15px;
  }
  .phone__container {
    display: flex;
    gap: 10px;
    font-size: 35px;
    align-items: center;
    color: #e89f71;
    margin-bottom: 40px;
  }
  .text {
    font-size: 30px;
  }

  .form {
    position: relative;
    display: block;
    background: #fff;
    padding: 100px;
    box-shadow: 0 0px 30px rgba(0, 0, 0, 15%);
    max-width: 800px;
    width: 100%;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
  }
  .form__input {
    position: relative;
    display: block;
    width: 100%;
    height: 56px;
    border: 1px solid #eae0d9;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    color: #766068;
    transition: all 0.5s ease;
  }
  .form__textarea {
    position: relative;
    display: block;
    resize: none;
    width: 100%;
    height: 56px;
    border: 1px solid #eae0d9;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    color: #766068;
    transition: all 0.5s ease;
  }
  .form__btn {
    display: block;
    background: #77474b;
    color: #fff;
    cursor: pointer;
    width: 200px;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    text-transform: uppercase;
    border-radius: 5px;
    border: 1px solid #77474b;
    margin: 20px auto 0;
    transition: all 0.5s ease;
  }
`;
