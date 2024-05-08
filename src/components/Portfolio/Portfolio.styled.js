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
    width: 630px;
    object-fit: cover;
    height: auto;
  }
  .services__img-box {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
`;
