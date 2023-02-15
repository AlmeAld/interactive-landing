import "./header.scss";
import Logo from "../../assets/logo.png";
import menuIcon from "../../assets/mobile/menu.svg";
import closeIcon from "../../assets/mobile/close.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import youtubeIcon from "../../assets/youtube-icon.svg";
import React from "react";

export const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <header className={`header ${mobileNavOpen ? "bg-white" : ""}`}>
      <nav className="header__nav">
        <a className="header__logo-container" href="#">
          <img className="header__logo" src={Logo} alt="logo" />
        </a>
        <button
          className="header__menu-button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <p className="sr-only">{mobileNavOpen ? "Cerrar" : "Abrir"} Menu</p>
          <img
            className="header__menu-icon"
            src={mobileNavOpen ? closeIcon : menuIcon}
            alt="menu"
          />
        </button>
        <ul className={`header__menu-list ${mobileNavOpen ? "open" : ""}`}>
          <li className="header__menu-item">
            <a className="header__menu--link" href="">
              Nuestros productos
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu--link" href="">
              Disfruta cuidarte
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu--link" href="">
              Blog
            </a>
          </li>
          <div className="header__social">
            <a className="header__menu--link " href="">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a className="header__menu--link " href="">
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a className="header__menu--link " href="">
              <img src={youtubeIcon} alt="youtube" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};
