// src/components/Sbms.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Importe useTranslation
import seta from "../assets/Sbms.svg";

interface SbmsProps {
  href: string;
  text?: string; // Mantenha text opcional, se for usar uma chave específica
  isRotatedInitially?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Sbms: React.FC<SbmsProps> = ({
  href,
  text, // Remova o valor padrão aqui
  isRotatedInitially = false,
  onClick,
}) => {
  const { t } = useTranslation(); // Use o hook useTranslation

  const [isRotated, setIsRotated] = useState(isRotatedInitially);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsRotated((prev) => !prev);
    if (onClick) {
      onClick(event);
    }
  };

  const rotationClass = isRotated ? "rotate-180" : "rotate-0";

  const arrowSvgContent = (
    <img
      src={seta}
      alt="Seta"
      className="ml-2 w-6 h-6 transition-transform duration-300 ease-in-out"
    />
  );

  return (
    <a
      href={href}
      className="inline-flex items-center text-white font-semibold text-lg hover:underline transition-colors"
      onClick={handleClick}
    >
      {text || t("saiba_mais")}{" "}
      {/* Usa a prop 'text' se existir, senão usa a tradução 'saiba_mais' */}
      {React.cloneElement(arrowSvgContent, {
        className: `${arrowSvgContent.props.className} ${rotationClass}`,
      })}
    </a>
  );
};

export default Sbms;
