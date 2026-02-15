// src/components/Qmsomos.tsx
import { useTranslation } from "react-i18next";
import img2 from "../assets/imgdir.jpg";
import Arrow from "./entctt";

function Qmsomos() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F3F3F3] relative overflow-hidden">
      <div className="flex flex-col w-full md:w-2/5 p-4 md:p-12 justify-center order-2 md:order-1">
        <h3 className="text-xl md:text-3xl font-extralight text-blue-300 mb-2 uppercase">
          {t("qmsomos_quem_somos_subtitle")}
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {t("qmsomos_title")}
        </h2>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8">
          {t("qmsomos_description")}
        </p>
        <Arrow />
      </div>
      <div className="relative flex flex-col w-full md:w-3/5 items-center justify-center p-4 md:p-8 order-1 md:order-2">
        <img
          src={img2}
          alt="Pessoa trabalhando em um notebook"
          className="relative z-10 left-1/10 w-full max-w-sm md:max-w-full md:w-4/5 h-auto object-cover shadow-lg"
        />
        <div
          className="max-w-screen absolute bg-[#500203] z-0
                      w-full h-1/4 md:w-full md:h-10/12
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      md:top-1/2 md:right-0 md:left-auto md:translate-x-1/4 md:-translate-y-1/2"
        ></div>
      </div>
    </div>
  );
}

export default Qmsomos;
