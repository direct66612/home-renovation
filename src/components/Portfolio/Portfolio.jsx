import { Section } from "./Portfolio.styled";

import rewOne from "../../img/reviews-1.jpg";
import rewTwo from "../../img/reviews-2.jpg";
import rewThree from "../../img/reviews-3.jpg";
import rewFour from "../../img/reviews-4.jpg";
import rewFive from "../../img/reviews-5.jpg";

export const Portfolio = () => {
  return (
    <Section>
      <h1 className="title">Portfolio</h1>
      <div className="container-box">
        <div className="services__img-box">
          <img src={rewOne} alt="construction kitchen" />
          <img src={rewTwo} alt="construction bedroom" />
          <img src={rewThree} alt="construction dinner room" />
          <img src={rewFour} alt="construction bath" />
          <img src={rewFive} alt="construction house" />
        </div>
      </div>
    </Section>
  );
};
