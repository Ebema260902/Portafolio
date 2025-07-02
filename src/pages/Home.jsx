import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


const GradientShapes = () => {
    return (
        <>
            <div className="gradient-shape shape1"></div>
            <div className="gradient-shape shape2"></div>
            <div className="gradient-shape shape3"></div>
            <div className="gradient-shape shape4"></div>
        </>
    );
};

const Home = () => {
    return (
        <div className="scroll-smooth flex items-center justify-center">
            <GradientShapes />
            <main className="relative z-10 text-center px-6 py-12 max-w-3xl mx-auto flex flex-col justify-center min-h-[80vh] mt-[55px] max-sm:mt-0 mb-[200px]">
                <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide text-gray-800">
                    <span className="block mb-2 text-3xl md:text-3xl opacity-80">EMANUEL AGÜERO</span>
                </h1>
                <p className="text-gray-600 mb-8 text-2xl">
                    Desarrollador web full-stack <br /> y diseñador UX/UI
                </p>
                <div className="flex justify-center gap-4 text-lg">
                    <Link
                        to="/projects"
                        className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 rounded-lg shadow transition duration-200 flex items-center gap-2"
                    >
                        → mis proyectos
                    </Link>

                    <a
                        href="#about"
                        className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 rounded-lg shadow transition duration-200 flex items-center gap-2"
                    >
                        → sobre mí
                    </a>
                </div>

            </main>
        </div>
    );
};


const AboutMe = () => {
    return (
      <div id="about" className="py-20 sm:py-40 text-center bg-white">
        <div className="py-12 px-4 sm:px-12 md:px-28 mb-20 sm:mb-28 bg-blue-50 bg-opacity-50 border rounded-xl max-w-6xl mx-auto">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold mb-4">SOBRE MÍ</h1>
            <p className="text-gray-600 text-lg sm:text-2xl">
              Apasionado por el desarrollo web y la experiencia de usuario
            </p>
          </div>
  
          {/* Content */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Desarrollador web con enfoque full-stack, apasionado por construir soluciones funcionales y atractivas. 
                He trabajado en proyectos que combinan <span className="font-semibold">frontend moderno, lógica backend y gestión de servidores</span>.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Me interesa la <span className="font-semibold">experiencia de usuario, el rendimiento de las aplicaciones y el despliegue en la nube</span>. 
                Disfruto aprender nuevas tecnologías y adaptarme a distintos retos según el contexto del proyecto.
              </p>
  
              {/* Botones sin modificar */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                  href="#skills"
                  className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-5 py-3 rounded-lg shadow transition duration-200 flex items-center gap-2"
                >
                  Mis habilidades
                </a>
                {/* <a
                  href="/projects"
                  className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-5 py-3 rounded-lg shadow transition duration-200 flex items-center gap-2"
                >
                  Ver mis proyectos
                </a> */}
                <a
                  href="/contact"
                  className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-5 py-3 rounded-lg shadow transition duration-200 flex items-center gap-2"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  };
  




const Skills = () => {
    return (
        <div id="skills" className="py-28 px-6 bg-white text-center">
            <h1 className="text-black text-5xl font-bold mb-16">HABILIDADES</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                    { title: "Lenguajes", desc: "PHP, JavaScript, C#" },
                    { title: "Frameworks", desc: "ASP.NET, React, MVC, Bootstrap, TailwindCSS" },
                    { title: "CMS", desc: "WordPress (temas, creación plugins, personalización)" },
                    { title: "Cloud & DevOps", desc: "Amazon EC2, Git, GitHub, Pantheon, Vercel" },
                    { title: "Herramientas de desarrollo", desc: "Visual Studio Code, Visual Studio 2022, NetBeans" },
                    { title: "Testing & Seguridad", desc: "Selenium, TestCraft, SonarCloud" },
                    { title: "Bases de datos", desc: "SQL Server, MySQL" },
                    { title: "Diseño UX/UI", desc: "Figma, Photoshop, Illustrator" },
                ].map((skill, index) => (
                    <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md grid gap-2">
                        <h3 className="text-xl font-bold text-red-500">{skill.title}</h3>
                        <p className="text-base text-gray-700">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    
    );
};


const HomePage = () => {
    return (
        <>
            <Home />
            <AboutMe/>
            <Skills />
        </>
    );
};

export default HomePage;