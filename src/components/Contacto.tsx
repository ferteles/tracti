// src/components/Contacto.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col md:flex-row min-h-screen bg-white items-center justify-center py-16 px-4 md:px-8"
      id="contacto"
    >
      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-12">
        <h3 className="text-sm md:text-base font-bold uppercase text-blue-600 mb-2">
          {t("contact_subtitle")}
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {t("contact_title").split('<br className="hidden md:inline" />')[0]}{" "}
          <br className="hidden md:inline" />{" "}
          {t("contact_title").split('<br className="hidden md:inline" />')[1]}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
          {t("contact_description")}
        </p>
      </div>

      <form
        action="https://submit-form.com/N9mLMAemn"
        className="flex flex-col w-full md:w-1/2 max-w-lg md:max-w-md lg:max-w-lg"
      >
        <input
          name="name"
          type="text"
          placeholder={t("contact_form_name")}
          className="bg-gray-700 text-white p-4 rounded-md mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="email"
          type="text"
          placeholder={t("contact_form_contact")}
          className="bg-gray-700 text-white p-4 rounded-md mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder={t("contact_form_message")}
          rows={6}
          className="bg-gray-700 text-white p-4 rounded-md mb-6 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-[#500203] text-white font-bold py-3 px-8 rounded-md self-end hover:bg-red-800 transition duration-300 cursor-pointer"
        >
          {t("contact_form_send_btn")}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
