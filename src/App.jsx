import { useState } from "react";
import "./app.scss";
import heroImg from "./assets/mobile/img-main.svg";
import logoFed from "./assets/log-fed-mx.svg";
import logoCal from "./assets/logo-cal.svg";
import arrowDown from "./assets/icon-arrow-down.svg";
import vitalineaGriego from "./assets/mobile/vitalinea-griego.svg";
import vitalineaSinAzucar from "./assets/mobile/vitalinea-sin-azucar.svg";
import vitalineaBebible from "./assets/mobile/vitalinea-bebible.svg";
import danoneFooter from "./assets/mobile/logo-danone-footer.jpg";
import vitalineaFooter from "./assets/mobile/logo-vitalinea-footer.jpg";
import fresaImage from "./assets/fresa.png";
import { Header } from "./components/Header/Header";

const nutritionalInfo = [
  {
    label: "Contenido energético kj/kcl",
    value: "413,2/97,9",
    sabor: "fresa",
  },
  {
    label: "Proteínas (g)",
    value: "5.3",
    sabor: "fresa",
  },
  {
    label: "Grasas (lípidos) (g)",
    value: "2.1",
    sabor: "fresa",
  },
  {
    label: "Grasas saturadas (g)",
    value: "1.4",
    sabor: "fresa",
  },
  {
    label: "Carbohidratos (Hidratos de carbono) (g)",
    value: "12.4",
    sabor: "fresa",
  },
  {
    label: "Azúcares (g)",
    value: "7.7",
    sabor: "fresa",
  },
  {
    label: "Azúcares Añadidos (g)",
    value: "0.1",
    sabor: "fresa",
  },
  {
    label: "Fibra dietética (g)",
    value: "0.0",
    sabor: "fresa",
  },
  {
    label: "Sodio (mg)",
    value: "92.7",
    sabor: "fresa",
  },
  {
    label: "Calcio (mg)",
    value: "199.6",
    sabor: "fresa",
  },
  {
    label: "%VNR*",
    value: "22",
    sabor: "fresa",
  },
];
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <img className="fresa-main-1" src={fresaImage} alt="" />
          <img className="fresa-main-2" src={fresaImage} alt="" />
          <img className="fresa-main-3" src={fresaImage} alt="" />
          <div className="main__wrapper">
            <div className="main__hero-image-container">
              <img className="main__hero-image" src={heroImg} alt="" />
            </div>
            <div className="main__product-info-container">
              <div className="main__flavor-container">
                <p className="main__flavor-label">Sabor: </p>
                <div>
                  <button className="main__flavor-button main__flavor-button--active">
                    Fresa
                  </button>
                  <button className="main__flavor-button">Guayaba</button>
                  <button className="main__flavor-button">Toronja</button>
                </div>
              </div>
              <div className="main__product-description-container">
                <h1 className="main__product-name">
                  Vitalínea® Bebible Fresa 217 gr.
                </h1>
                <p className="main__product-description">
                  ¡La presentación ideal para llevar contigo! Vitalínea bebible
                  es la opción si eres de las personas que siempre están activas
                  y quieren probar algo sano, rico y práctico.
                </p>
              </div>
              <button className="main__buy-button">Comprar en Walmart</button>
              <div className="main__certifications-container">
                <img
                  className="main__certification-logo"
                  src={logoFed}
                  alt="logo federacion mexicana"
                />
                <img
                  className="main__certification-logo"
                  src={logoCal}
                  alt="menos de 100 cal"
                />
              </div>
            </div>
          </div>
        </main>
        <section className="nutritional-info" id="nutritional">
          <img className="fresa-nutritional-1" src={fresaImage} alt="" />
          <img className="fresa-nutritional-2" src={fresaImage} alt="" />
          <img className="fresa-nutritional-3" src={fresaImage} alt="" />
          <div className="nutritional-info__wrapper">
            <h2 className="nutritional-info__title">Información nutrimental</h2>
            <div className="nutritional-info__content">
              <div className="nutritional-info__content-description">
                <p className="nutritional-info__description">
                  Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de
                  217gr Porciones por envase: 1
                </p>
                <h3 className="nutritional-info__ingredients-label">
                  Ingredientes:
                </h3>
                <p className="nutritional-info__ingredients">
                  Leche descremada pasteurizada y/o reconstituida pasteurizada
                  de vaca. 3.5% preparado de fruta guayaba (acesulfame K y
                  sucralosa (27.2mg/100g)), crema, almidón modificado,
                  maltodextrina y cultivos lácticos.
                </p>
              </div>
              <div className="nutritional-info__details">
                {nutritionalInfo.map(({ label, idx, value }) => (
                  <div className="nutritional-info__detail">
                    <div className="nutritional-info__detail-label" key={idx}>
                      {label}
                    </div>
                    <div className="nutritional-info__detail-value">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a
            aria-label="Ir a la siguiente sección"
            className="main__scroll-button"
            href="#nutritional"
          >
            <img
              className="main__scroll-icon"
              src={arrowDown}
              alt="flecha hacia abajo "
            />
          </a>
        </section>
        <section className="vitalinea-family">
          <img className="fresa-family-1" src={fresaImage} alt="" />
          <img className="fresa-family-2" src={fresaImage} alt="" />
          <img className="fresa-family-3" src={fresaImage} alt="" />
          <div className="vitalinea-family__wrapper">
            <h3 className="vitalinea-family__title">La familia Vitalínea</h3>
            <div className="vitalinea-family__products">
              <div className="vitalinea-family__product">
                <img
                  src={vitalineaGriego}
                  alt="vitalínea griego"
                  className="vitalinea-family__griego-image"
                />
                <p className="vitalinea-family__product-name">
                  Vitalínea Griego
                </p>
              </div>
              <div className="vitalinea-family__product">
                <img
                  src={vitalineaSinAzucar}
                  alt="Vitalínea Sin Azúcar"
                  className="vitalinea-family__azucar-image"
                />
                <p className="vitalinea-family__product-name">
                  Vitalínea Sin Azúcar
                </p>
              </div>
              <div className="vitalinea-family__product">
                <img
                  src={vitalineaBebible}
                  alt="Vitalínea Bebible"
                  className="vitalinea-family__bebible-image"
                />
                <p className="vitalinea-family__product-name">
                  Vitalínea Bebible
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__wrapper">
            <div className="footer__logos">
              <img
                src={danoneFooter}
                alt="logo danone"
                className="footer__logo-danone"
              />
            </div>

            <div className="footer__info">
              <ul className="footer__links">
                <li>
                  <a href="">Términos y condiciones</a>
                </li>
                <li>
                  <a href="">Políticas de privacidad</a>
                </li>
                <li>
                  <a href="">Aviso de privacidad</a>
                </li>
              </ul>
              <p className="footer__copyright">
                Danone de México 2017 ©. Todos los derechos reservados 2017
              </p>
            </div>
            <div className="footer__logos">
              <img
                src={vitalineaFooter}
                alt="logo de vitalinea"
                className="footer__logo-vitalinea"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
