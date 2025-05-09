import videoSplineResponsive from "@assets/video/spline_model_video_responsive.mp4";
import videoSpline from "@assets/video/spline_model_video.mp4";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelBalonGlass from "@utils/model3D/BalonGlass.jsx";
import { useEffect, useState, useMemo } from "react";
import logo from "@assets/img/logo_sin_fondo.png";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./spline.css";

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    document.getElementById("nav_header")?.classList.add("hidden");

    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("nav_header")?.classList.remove("hidden");
      document.querySelector(".wpp")?.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 3500);

    setTimeout(() => {
      setIsFinished(true);
    }, 3600);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width > 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const modelProps = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { position: [0, 0, -60], scale: 0.6 };
      case "tablet":
        return { position: [0, 0, -60], scale: 0.8 };
      default:
        return { position: [0, 0, -60], scale: 1.2 };
    }
  }, [deviceType]);

  return (
    <section
      id="section_spline"
      className={`section h-screen w-full select-none relative z-50 ${isFinished ? "hidden" : ""
        }`}
    >
      {/* Título en el centro */}
      <div className="div_img fade-in">
        <img
          className="w-28 sm:w-40 md:w-60 lg:w-full"
          src={logo}
          alt="logo D10"
        />
      </div>
      <div className="div_title_logo fade-in">
        <h1 className="title text-black">D10</h1>
      </div>

      {/* Balon Glass Model 3D */}
      {!isFinished && (
        <>
          {/* {deviceType == "desktop" && (
            <div id="model_glass" className="full-screen active animate-jump-in">
              <video className="video__spline" autoPlay muted loop>
                <source src={videoSpline} className="w-full h-full" type="video/mp4" />
              </video>
            </div>
          )}
          {deviceType == "tablet" && (
            <div id="model_glass" className="full-screen active animate-jump-in">
              <video className="video__spline" autoPlay muted loop>
                <source src={videoSpline} className="w-full h-full" type="video/mp4" />
              </video>
            </div>
          )}
          {deviceType == "mobile" && (
            <div id="model_glass" className="full-screen active animate-jump-in">
              <video className="video__spline" autoPlay muted loop>
                <source src={videoSplineResponsive} className="w-full h-full" type="video/mp4" />
              </video>
            </div>
          )} */}
          <div id="model_glass" className="full-screen active animate-jump-in">
            <Canvas className="w-full h-[105%;] canvas">
              <ambientLight />
              <OrbitControls
                enableZoom={false}
                autoRotate={false}
                enableRotate={false}
              />
              <Suspense fallback={null}>
                <ModelBalonGlass
                  position={modelProps.position}
                  scale={modelProps.scale}
                />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </div>
        </>
      )}
    </section>
  );
}
