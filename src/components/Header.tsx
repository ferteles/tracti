// src/components/Header.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Importe useTranslation
import logo from "../assets/logo.svg";
import bck from "../assets/bckgnd.png";
import menu from "../assets/menu.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use o hook useTranslation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url(${bck})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay de fundo preto principal para o cabeçalho */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Navegação (Logo e Links) - Fixa no topo */}
      {/* Removido o overlay extra que estava aqui no código original */}
      <div className="absolute top-0 left-0 right-0 z-10 p-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Logo Tracti" className="h-10 md:h-12" />

          {/* Botão do Hambúrguer (visível apenas em telas menores) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns={menu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navegação Principal */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-end space-y-4 md:space-y-0 md:space-x-6 text-white text-sm md:text-base font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-transparent md:bg-transparent p-5 md:p-0 rounded-b-lg md:rounded-none shadow-lg md:shadow-none`}
          >
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              {t("quem_somos_nav")}
            </a>
            <a
              href="#service"
              className="hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              {t("servicos_nav")}
            </a>
            <a
              href="#contacto"
              className="hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              {t("contacto_nav")}
            </a>
            <a
              href="#Sus"
              className="hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              {t("sustentabilidade_nav")}
            </a>
            <button className="border border-white px-3 py-1 md:px-4 md:py-1 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="#contacto" onClick={toggleMenu}>
                {t("entre_em_contacto_btn_nav")}
              </a>
            </button>
            {/* Botão de idioma PT/EN */}
            <button
              className="hover:text-blue-300 transition-colors"
              onClick={changeLanguage}
            >
              {i18n.language.toUpperCase()} /{" "}
              {i18n.language === "pt" ? "EN" : "PT"}
            </button>
            {/* Botão de Teste de Idioma */}
          </nav>
        </div>
      </div>

      {/* Conteúdo "EXTRACTING VALUE" */}
      <div className="absolute bottom-0 left-0 z-10 w-full flex flex-col justify-start items-start pb-[15vh] px-16 md:px-36 lg:px-124 top-90 lg:top-160">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {t("header_title")}
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl max-w-xl">
          {t("header_description")}
        </p>
      </div>
    </header>
  );
};

export default Header;
