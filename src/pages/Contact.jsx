import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctame</h2>
        <p className="text-gray-600 mb-8">Podés encontrarme en cualquiera de estos canales:</p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:emanuel260902@gmail.com"
            className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-xl w-full justify-center transition"
          >
            <FaEnvelope className="text-xl" /> emanuel260902@gmail.com
          </a>

          <a
            href="www.linkedin.com/in/emanuel-agüero-moya-21b6b81a4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-xl w-full justify-center transition"
          >
            <FaLinkedin className="text-xl" /> Emanuel Agüero Moya
          </a>

          <a
            href="https://github.com/Ebema260902"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl w-full justify-center transition"
          >
            <FaGithub className="text-xl" /> /Ebema260902
          </a>

          <a
            href="https://wa.me/50662076022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-50 hover:bg-green-100 text-green-700 px-6 py-3 rounded-xl w-full justify-center transition"
          >
            <FaWhatsapp className="text-xl" /> +506 62076022
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
