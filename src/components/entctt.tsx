// src/components/entctt.tsx
import { useTranslation } from "react-i18next"; // Importe useTranslation
import arrow from "../assets/Arrow.svg";

interface EntreProps {
  isWhite?: boolean;
}

function Entre({ isWhite = false }: EntreProps) {
  const { t } = useTranslation(); // Use o hook useTranslation

  const textColorClass = isWhite ? "text-white" : "text-[#500203]";
  const arrowFilterStyle = isWhite
    ? {
        filter:
          "invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(100%)",
      }
    : {};

  return (
    <div className="">
      <a
        href="#contacto"
        className={`text-2xl flex items-center p-2 ${textColorClass}`}
      >
        {t("entre_em_contacto")} {/* Use t() para traduzir */}
        <img
          src={arrow}
          alt="Seta"
          className="ml-2 w-10 h-10"
          style={arrowFilterStyle}
        />
      </a>
    </div>
  );
}

export default Entre;
