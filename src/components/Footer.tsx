// src/components/Footer.tsx
import { useTranslation } from "react-i18next"; // Importe useTranslation
import logo from "../assets/logo.svg";
import bck from "../assets/bckfooter.jpg";
import img from "../assets/imgfooter.svg";

function Footer() {
  const { t } = useTranslation(); // Use o hook useTranslation

  return (
    <footer className="relative bg-[#500203] text-white py-16 px-4 md:px-8 lg:px-16 min-h-[688px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <img
          src={img}
          alt=""
          className="absolute w-screen h-screen z-0 items-center object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 px-4 md:px-0 h-full">
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/3 mt-10 lg:mt-0">
          <img
            src={logo}
            alt="Logo Tracti"
            className="w-full h-auto object-contain max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full lg:w-2/3 justify-center lg:justify-end gap-16 md:gap-32">
          {/* Coluna 1: EXPLORE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-normal text-xl md:text-2xl mb-8 uppercase tracking-wider">
              {t("explore_footer")}
            </h1>
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-xs md:text-sm font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {t("quem_somos_nav")}
              </a>
              <a
                href="#service"
                className="text-xs md:text-sm font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {t("servicos_nav")}
              </a>
              <a
                href="#contacto"
                className="text-xs md:text-sm font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {t("contacto_nav")}
              </a>
              <a
                href="#Sus"
                className="text-xs md:text-sm font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {t("sustentabilidade_nav")}
              </a>
              <div className="pt-4">
                <button className="border border-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-light uppercase tracking-wider hover:bg-white hover:text-[#500203] transition-colors duration-300">
                  {t("entre_em_contacto_btn_nav")}
                </button>
              </div>
            </nav>
          </div>

          {/* Coluna 2: CONTACTOS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[300px]">
            <h1 className="font-normal text-xl md:text-2xl mb-8 uppercase tracking-wider">
              {t("contactos_footer")}
            </h1>
            <div className="flex flex-col text-xs md:text-sm font-light uppercase tracking-wider w-full">
              <a
                href={`mailto:${t("footer_email")}`}
                className="break-all mb-4 hover:text-gray-300 transition-colors block"
              >
                {t("footer_email")}
              </a>
              <a
                href="tel:+244976334449"
                className="mb-10 hover:text-gray-300 transition-colors block"
              >
                {t("footer_phone")}
              </a>
              <a
                href="https://maps.app.goo.gl/SPVPA5yim1FZSPzR7"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-7 hover:text-gray-300 transition-colors"
              >
                {t("footer_address")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
