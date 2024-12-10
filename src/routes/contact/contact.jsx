import icon_wpp_color from '@assets/icons/icon_wpp_color.png';
import icon_fb_color from '@assets/icons/icon_fb_color.png';
import icon_ig_color from '@assets/icons/icon_ig_color.png';
import HeaderPage from '@layouts/header-pages/header-page';
import SplineModel from '@components/spline/spline.jsx';
import axios from 'axios';
import { useEffect, useState } from "react";
import './contact.css'

export default function Contact() {
  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [sectionOne, setSectionOne] = useState({
    title: "",
    bg_photo: "",
    subtitle: "",
  });

  function getNews() {
    axios
      .get(`${urlApi}landing/g/contact`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getNews();
  }, []);

  // Fin de la conexión

  return (
    <>
      <HeaderPage />

      <SplineModel />

      <section className="contact">
        <h1 className="title__contact text-8xl text-[#ffc702]">
          {sectionOne.title}
        </h1>
        <div className="card-form__contact bg-black">
          <div className="cntr-form__contact">
            <h2 className="subtitle__contact text-3xl text-[#d2dcfd]">
              {sectionOne.subtitle}
            </h2>
            <form action="" className="form__contact">
              <div className="cntr-info__contact">
                <div className="info__contact">
                  <label className="label__contact text-white">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input__contact"
                  />
                </div>
                <div className="info__contact">
                  <label className="label__contact text-white">Correo</label>
                  <input
                    type="email"
                    placeholder="Username@gmail.com"
                    className="input__contact"
                  />
                </div>
              </div>
              <div className="cntr-message__contact">
                <label className="label__contact text-white">Mensaje</label>
                <input
                  type="text"
                  placeholder="Mensaje..."
                  className="input__contact"
                />
              </div>
              <div className="cntr-btn__contact">
                <input
                  type="button"
                  value="Enviar"
                  className="btn-input__contact text-xl text-[#ffc702] hover:text-black bg-transparent hover:bg-[#ffc702]"
                />
              </div>
            </form>
            <div className="cntr-redes__contact">
              <p className="text__contact text-base text-[#d2dcfd]">
                Escríbenos por otros medios
              </p>
              <div className="redes__contact">
                <img
                  src={icon_wpp_color}
                  alt="WhatsApp"
                  className="img-redes__contact"
                />
                <img
                  src={icon_ig_color}
                  alt="Instagram"
                  className="img-redes__contact"
                />
                <img
                  src={icon_fb_color}
                  alt="Facebook"
                  className="img-redes__contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
