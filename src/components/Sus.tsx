// src/components/Sus.tsx
import { useTranslation } from "react-i18next";
import imgsus from "../assets/tree.jpg";

function Sustentabilidade() {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col md:flex-row min-h-screen py-16 md:py-24 bg-[#F3F3F3]"
      id="Sus"
    >
      <div className="relative flex flex-col w-full md:w-1/2 items-center justify-center p-4 md:p-8 order-1">
        <img
          src={imgsus}
          alt="Folhas verdes simbolizando sustentabilidade"
          className="relative z-10 w-full h-full object-cover max-h-full shadow-xl"
        />

        <div
          className="absolute bg-[#500203] z-0
                      w-11/12 h-[80%]
                      top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      md:w-[95%] md:h-[90%] md:top-[45%] md:left-[15%] md:-translate-x-1/2 md:-translate-y-1/2
                      lg:w-[98%] lg:h-[90%] lg:top-[55%] lg:left-[18%] lg:-translate-x-1/2 lg:-translate-y-1/2"
        ></div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 p-6 md:p-12 justify-center order-2 ">
        <h3 className="text-sm md:text-3xl text-blue-500 tracking-wide mb-2">
          {t("sustentabilidade_subtitle")}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {t("sustentabilidade_title")}
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {t("sustentabilidade_description")}
        </p>
      </div>
    </section>
  );
}

export default Sustentabilidade;
