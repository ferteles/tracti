// src/components/Hero.tsx
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className="relative z-20
                  -mt-32 md:-mt-48 lg:-mt-16
                  bg-[#500203] text-white
                  w-full md:w-4/5 lg:w-3/5 xl:w-1/2
                  mx-auto
                  md:ml-[25%]
                  p-10 md:p-12 lg:p-14
                  max-w-screen-xl
                  flex flex-col justify-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase">
        {t("hero_title")}
      </h1>
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        {t("hero_description")}
      </p>
    </div>
  );
}

export default Hero;
