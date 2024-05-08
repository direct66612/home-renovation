import { Reviews, Section } from "./About.styled";
import aboutbg from "../../img/about-bg.png";
import rewOne from "../../img/reviews-1.jpg";
import rewTwo from "../../img/reviews-2.jpg";
import rewThree from "../../img/reviews-3.jpg";
import rewFour from "../../img/reviews-4.jpg";
import rewFive from "../../img/reviews-5.jpg";

export const About = () => {
  return (
    <>
      <Section>
        <div>
          <h1 className="title">About Us</h1>
          <p className="text">
            Hello, friends! My name is Kyrylo Trytiachenko, and I am the owner
            of a construction company. I have been working in the construction
            industry for over 8 years. I started my journey in this profession
            as an assistant to a plaster master, and during this time I acquired
            vast experience and skills that help me complete any project with
            high quality and on time. Construction for me is not only a job, but
            also a real art that requires a lot of knowledge, skills and
            creativity. I am proud to be part of an industry that is constantly
            evolving and bringing new technologies and ways of working. I am
            ready to share my experience and knowledge with you. We are pleased
            to welcome new clients to our website and thank our current clients
            for their trust and positive feedback about us. We are ready to
            provide you with quality services across the entire repair and
            construction spectrum. We see that every project is unique and we
            have all the necessary tools and knowledge to implement it with the
            precision that meets the client's requirements. Our team consists of
            experienced and highly qualified specialists who are ready to help
            you with any project team. We do everything possible to provide our
            customers with a level of service, quality work and high competitive
            prices. We are confident in our lifestyle and are ready to take on
            any project, no matter how complex it may be. We take pride in every
            project and ensure that our client is completely satisfied with the
            result. If you are looking for a reliable and experienced builder
            for your satisfaction in our services provided, contact us. We are
            ready to take on any project and do it this way. We proudly offer
            home renovation services across Toronto, the GTA, Richmond Hill,
            Oshawa, Guelph, Kitchener, Barrie and others.
          </p>
        </div>
        <img src={aboutbg} alt="" />
      </Section>
      <Reviews>
        <h2 className="reviews__title">Reviews</h2>
        <div className="reviews__info">
          <div className="reviews__info-box">
            <p className="reviews__info-text">
              Thanks Kyrylo, he did beautiful kitchen and living room, now my
              home looks amazing.
            </p>
            <div className="reviews__container-img">
              <img src={rewOne} alt="construction" />
              <img src={rewTwo} alt="construction" />
              <img src={rewThree} alt="construction" />
            </div>
          </div>
          <div className="reviews__info-box">
            <p className="reviews__info-text">
              I contacted this company and used them for the first time and I
              can not say enough about them! They were amazing! They are hard
              working men! They ask questions prior to make sure it’s what YOU
              want done! They do their very best to keep your house clean by
              laying blankets down where ever they are walking outside of the
              area where the work is being done! Very polite and are very
              professional and hard working! I LOVE my new bathroom and will
              continue to use them for other jobs!! HIGHLY recommended Thank you
              so very much Kyrylo and your guys! You guys are amazing!
            </p>
            <div className="reviews__container-img">
              <img src={rewFour} alt="construction" />
              <img src={rewFive} alt="construction" />
            </div>
          </div>
        </div>
      </Reviews>
    </>
  );
};
