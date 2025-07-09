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
        <div className="scroll-smooth flex items-center justify-center overflow-x-hidden sm:overflow-x-visible relative">

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
      <div id="about" className="py-20 sm:py-40 px-4 sm:px-0 text-center">
  <div className="py-12 sm:px-12 mb-20 sm:mb-28 bg-blue-50 bg-opacity-50 border rounded-xl max-w-6xl mx-auto w-full">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold mb-4">SOBRE MÍ</h1>
            <p className="text-gray-600 text-lg sm:text-2xl">
              Apasionado por el desarrollo web y la experiencia de usuario
            </p>
          </div>
  
          {/* Content */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 sm:gap-12 items-center">
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
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    const skills = [
      // 🟨 Lenguajes de programación
      { name: "JavaScript", src: "assets/images/icons/js.webp" },
      { name: "PHP", src: "assets/images/icons/php.png" },
      { name: "C#", src: "assets/images/icons/csharp.png" },
  
      // 🟦 Frameworks y librerías
      { name: "React", src: "assets/images/icons/react.png" },
      { name: "Tailwind CSS", src: "assets/images/icons/tailwind.png" },
      { name: "Bootstrap", src: "assets/images/icons/bootstrap.png" },
      { name: "ASP.NET", src: "assets/images/icons/aspnet.png" },
  
      // 🟪 CMS
      { name: "WordPress", src: "assets/images/icons/wordpress.png" },
  
      // 🟥 Control de versiones
      { name: "Git", src: "assets/images/icons/git.png" },
      { name: "GitHub", src: "assets/images/icons/github-logo.png" },
  
      // 🟧 Cloud y DevOps
      { name: "Amazon EC2", src: "assets/images/icons/ec2.png" },
      { name: "Vercel", src: "assets/images/icons/vercel.svg" },
      { name: "Pantheon", src: "assets/images/icons/pantheon.webp" },
  
      // 🟩 Bases de datos
      { name: "SQL Server", src: "assets/images/icons/sqlserver.png" },
      { name: "MySQL", src: "assets/images/icons/mysql.png" },
  
      // 🟫 Herramientas de desarrollo
      { name: "Visual Studio Code", src: "assets/images/icons/visualstudiocode.svg" },
      { name: "Visual Studio 2022", src: "assets/images/icons/visualstudio2022.png" },
  
      // 🟦 Diseño UX/UI
      { name: "Figma", src: "assets/images/icons/figma.svg" },
      { name: "Photoshop", src: "assets/images/icons/photoshop.png" },
      { name: "Illustrator", src: "assets/images/icons/illustrator.png" },
  
      // 🟥 Testing
      { name: "Selenium", src: "assets/images/icons/selenium.png" },
  ];
  
    return (
        <div id="skills" className=" pb-40 px-6 bg-white text-center">
            <h1 className="text-black text-5xl font-bold mb-16">Herramientas y tecnologías</h1>
            <div className="flex flex-wrap justify-center gap-16 items-center max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={skill.src}
                            alt={skill.name}
                            className="w-16 h-16 transition-transform duration-300 transform group-hover:scale-110 cursor-pointer"
                        />
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                            {skill.name}
                        </span>
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