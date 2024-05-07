import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import mail from "../../img/mail.png";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="header__icon-container">
          <li className="header__icon">
            <a href="tel:+14379718395">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4307 13.0668L12.9152 13.8401C12.8123 13.9944 12.6762 14.1261 12.4969 14.1735C11.9094 14.3287 10.3499 14.3988 7.97548 12.0244C5.60109 9.65004 5.67117 8.09046 5.82639 7.50302C5.87377 7.32368 6.00547 7.1876 6.15981 7.0847L6.93306 6.5692C7.50876 6.1854 7.66433 5.40757 7.28053 4.83187L5.82012 2.64126C5.48512 2.13876 4.83931 1.94678 4.28421 2.18468L3.62542 2.46702C3.12496 2.6815 2.71672 3.06643 2.47322 3.55343C2.26978 3.96031 2.1121 4.38877 2.09074 4.84317C2.02342 6.27515 2.33741 9.80312 6.26711 13.7328C10.1968 17.6625 13.7247 17.9765 15.1567 17.9092C15.6111 17.8878 16.0396 17.7301 16.4465 17.5267C16.9335 17.2832 17.3184 16.8749 17.5329 16.3745L17.8152 15.7157C18.0531 15.1606 17.8611 14.5148 17.3586 14.1798L15.168 12.7194C14.5923 12.3356 13.8145 12.4911 13.4307 13.0668Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li className="header__icon">
            <a href="mailto:example@example.com">
              <img src={mail} alt="mail icon" />
            </a>
          </li>
        </div>
      </ul>
    </Container>
  );
};
