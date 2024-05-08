import { Section } from "./Services.styled";
import aboutbg from "../../img/about-bg.png";
import kitchen from "../../img/kitchen.png";

import bathOne from "../../img/bath-1.png";
import bathTwo from "../../img/bath-2.png";

import bedOne from "../../img/bed-1.png";
import bedTwo from "../../img/bed-2.png";

export const Service = () => {
  return (
    <Section>
      <h1 className="title">Services</h1>
      <div className="container-box">
        <div className="service__info-box">
          <h2 className="service__info-title">Kitchen renovations</h2>
          <p className="text">
            The kitchen is like the heart of your home. You need it to survive,
            you want it to be as clean as possible and it has to be functional.
          </p>
        </div>
        <div className="services__img-box">
          <img src={aboutbg} alt="kitchen" />
          <img src={kitchen} alt="kitchen with construction" />
        </div>
      </div>
      <div className="container-box">
        <div className="service__info-box">
          <h2 className="service__info-title">Bathroom renovations</h2>
          <p className="text">
            Whether you need a full facelift to your bathroom, small
            alterations, or adding an entire new bathroom to your home - we will
            make it your favourite place in the house. During our consultation,
            we will provide you with specific requirements and ideas to get the
            job finished properly and on time.
          </p>
        </div>
        <div className="services__img-box">
          <img src={bathOne} alt="bath" />
          <img src={bathTwo} alt="bath with construction" />
        </div>
      </div>
      <div className="container-box">
        <div className="service__info-box">
          <h2 className="service__info-title">Bedroom renovations </h2>
          <p className="text">
            The bedroom is a place of relaxation, tranquility, and inspiration.
            We will help you make a modern, stylish, beautiful bedroom.
          </p>
        </div>
        <div className="services__img-box">
          <img src={bedOne} alt="bedroom" />
          <img src={bedTwo} alt="bedroom with construction" />
        </div>
      </div>
    </Section>
  );
};
