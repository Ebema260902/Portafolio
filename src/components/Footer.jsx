import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mx-auto bg-gray-900 text-white py-4">
            <div className=" mx-auto px-16 py-6 grid grid-cols-3 gap-10">
                
                {/* Descripción */}
                <div className="space-y-4 text-center text-left">
                    <h3 className="text-xl font-bold">Mi Portafolio</h3>
                    <p className="text-gray-400">
                        Este sitio es mi portafolio personal donde compartoproyectos y experiencias en desarrollo web, 
                        diseño multimedia y tecnología. Soy un desarrollador web full-stack con experiencia en tecnologías modernas como React, TailwindCSS y API REST.
                    </p>
                </div>


                {/* Contacto */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-xl font-bold">Contacto</h3>
                    <p className="text-gray-400">Palmares, Alajuela, Costa Rica</p>
                    <p className="text-gray-400">+506 62076022</p>
                    <p className="text-gray-400">emanuel260902@gmail.com</p>
                    {/* <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
                    </div> */}
                </div>

                {/* Enlaces */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">Enlaces</h3>
                    <ul className="space-y-2">
                        {[
                        { label: "Inicio", path: "/" },
                        { label: "Contacto", path: "/contact" },
                        ].map((link, index) => (
                        <li key={index}>
                            <Link
                            to={link.path}
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            {link.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center mt-6 border-t border-gray-700 pt-4">
                <p className="text-gray-500">© 2024 Emanuel Agüero</p>
            </div>
        </footer>
    );
};

export default Footer;