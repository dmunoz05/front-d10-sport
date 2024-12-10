import { useState } from "react";
import logo from "@assets/img/logo_sin_fondo.png";
import "./side-panel.css";

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <nav className="nav-panel">
        <img src={logo} alt="logo" className="img__nav-panel" />
        <button onClick={togglePanel} className="btn__nav-panel">
          ☰
        </button>
      </nav>

      <div
        className={`overlay ${isPanelOpen ? "active" : ""}`}
        onClick={closePanel}
      ></div>

      <aside className={`panel ${isPanelOpen ? "active" : ""}`}>
        <div className="cntr-section1__panel">
          <div className="cntr-img__panel">
            <img src={logo} alt="Logo" className="img__panel" />
          </div>
          <a className="link__panel text--active text-2xl" href="#">
            Quienes somos
          </a>
          <a className="link__panel text--active text-2xl" href="#">
            Servicios
          </a>
          <a className="link__panel text--active text-2xl" href="#">
            Contacto
          </a>
          <a className="link__panel text--active text-2xl" href="#">
            Iniciar sesión
          </a>
        </div>
        <div className="cntr-section2__panel">
          <footer className="footer__panel">&#169; D10mas</footer>
        </div>
      </aside>
    </>
  );
}
