// src/components/About.tsx
import { useTranslation } from "react-i18next";
import img1 from "../assets/imgesq.jpg";
import Arrow from "./entctt";

function About() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-[#F3F3F3]"
      id="about"
    >
      {/* Imagem da esquerda */}
      <div className="w-full md:w-3/5 h-screen md:h-auto flex flex-row">
        <img
          src={img1}
          alt="Homem com uniforme laranja em navio"
          className="relative w-9/10 h-full object-cover left-1/20  z-10 bg-transparent"
        />
        <div className="absolute w-2/5 h-180 bg-[#500203] top-200 lg:top-320 z-0 md:h-270 lg:h-360"></div>
      </div>

      {/* Texto da direita */}
      <div className="w-full md:w-1/2 px-6 py-10 flex flex-col justify-center ">
        <div className="max-w-xl mx-auto">
          <h2 className="text-blue-500 text-sm uppercase tracking-wide mb-2">
            {t("about_quem_somos_subtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("about_title")}
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            {t("about_description_part1")}
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            {t("about_description_part2")}
          </p>
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default About;
