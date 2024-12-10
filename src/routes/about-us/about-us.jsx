import HeaderPage from '@layouts/header-pages/header-page.jsx';
// import logoTeams from '@assets/icons/logo_teams_general.png';
import SplineModel from '@components/spline/spline.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './about-us.css';

export default function AboutUs() {
  const [sectionOne, setSectionOne] = useState({
    title: "",
    description: "",
  });

  const [sectionTwo, setSectionTwo] = useState({
    title1: "",
    title2: "",
    bg_photo: "",
    subtitle: "",
    description: "",
  });

  const [sectionThree, setSectionThree] = useState({
    title: "",
    description: "",
  });

  const [sectionFour, setSectioFour] = useState({
    title: "",
    bg_phot: "",
    description: "",
  });

  const [sectionFive, setSectionFive] = useState({
    icon: "",
    count_repeat: "",
  });

  const [sectionSix, setSectionSix] = useState({
    title: "",
    bg_phot: "",
    description: "",
  });

  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  function getNews() {
    axios
      .get(`${urlApi}landing/g/aboutus`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
        setSectionTwo(response.data[0].section_two);
        setSectionThree(response.data[0].section_three);
        setSectioFour(response.data[0].section_four);
        setSectionFive(response.data[0].section_five);
        setSectionSix(response.data[0].section_six);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <HeaderPage />

      <SplineModel />

      <section className="aboutus">
        <div className="cntr-txt__aboutus bg-black">
          <h1 className="title-1__aboutus text-8xl text-[#ffc702]">
            {sectionOne.title}
          </h1>
          <p className="text__aboutus padding-cntr-txt__space text-2xl text-white">
            {sectionOne.description}
          </p>
        </div>

        <div className="cntr-central__aboutus">
          <div className="central-cntr__aboutus">
            <h2 className="title-2__aboutus text-6xl text-white">
              {sectionTwo.title1}
              <br />
              {sectionTwo.title2}
            </h2>
            <h3 className="title-3__aboutus text-5xl text-[#ffc702]">
              {sectionTwo.subtitle}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionTwo.description}
            </p>
          </div>
        </div>

        <div className="cntr-txt__aboutus bg-black">
          <h3 className="title-3__aboutus text-[#ffc702] text-6xl">
            {sectionThree.title}
          </h3>
          <p className="text__aboutus padding-cntr-txt__space text-white text-2xl">
            {sectionThree.description}
          </p>
        </div>

        <div className="cntr-img__aboutus img-bg-right__aboutus">
          <div className="cntr-empty__aboutus"></div>
          <div className="cntr-side__aboutus">
            <h3 className="title-3__aboutus text-[#ffc702] text-4xl">
              {sectionFour.title}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionFour.description}
            </p>
          </div>
        </div>

        <div className="sponsors__aboutus bg-black">
          {/* <img src={logoTeams} alt="Image Sponsor" className="img__aboutus" />
          <img src={logoTeams} alt="Image Sponsor" className="img__aboutus" />
          <img src={logoTeams} alt="Image Sponsor" className="img__aboutus" />
          <img src={logoTeams} alt="Image Sponsor" className="img__aboutus" />
          <img src={logoTeams} alt="Image Sponsor" className="img__aboutus" /> */}

          {sectionFive.icon}
        </div>

        <div className="cntr-img__aboutus img-bg-left__aboutus">
          <div className="cntr-side__aboutus">
            <h3 className="title-3__aboutus text-[#ffc702] text-4xl">
              {sectionSix.title}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionSix.description}
            </p>
          </div>
          <div className="cntr-empty__aboutus"></div>
        </div>
      </section>
    </>
  );
}
