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
        <div id="about" className=" p-28">
            {/* Heading */}
            <div className="mb-16 text-center">
                <h1 className="text-black text-6xl font-bold mb-4">SOBRE MÍ</h1>
                <p className="text-gray-600 text-2xl">
                    Apasionado por el desarrollo web y la experiencia de usuario
                </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Desarrollador web full-stack con experiencia en 
                        tecnologías modernas como <span className="font-semibold">React, TailwindCSS y API REST</span>.
                        Me gusta crear interfaces intuitivas y dinámicas que mejoren la experiencia de los usuarios.
                    </p>
                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                        Mi enfoque se basa en <span className="font-semibold">optimización, escalabilidad y diseño centrado en el usuario</span>. 
                        Siempre busco aprender nuevas herramientas y mejorar mis habilidades para llevar cada proyecto al siguiente nivel.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center">
                        <a href="#projects" className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 rounded-lg shadow transition duration-200 flex items-center gap-2">
                            Ver mis proyectos
                        </a>
                        <a href="https://linkedin.com/in/tu-perfil" className="bg-blue-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 rounded-lg shadow transition duration-200 flex items-center gap-2">
                            Contáctame 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};



const Skills = () => {
    return (
        <div id="skills" className="py-20 bg-white text-center">
            <h1 className="text-black text-5xl font-bold mb-6">HABILIDADES</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    { title: "Lenguajes", desc: "PHP, JavaScript, C#, Java" },
                    { title: "Frameworks", desc: "ASP.NET, React, MVC, Bootstrap, TailwindCSS" },
                    { title: "Herramientas de desarrollo", desc: "Visual Studio Code, VS 2022" },
                    { title: "Testing & Seguridad", desc: "Selenium, TestCraft, SonarCloud" },
                    { title: "Bases de datos", desc: "SQL Server, MySQL" },
                    { title: "Diseño UX/UI", desc: "Figma, Photoshop, Illustrator" },
                ].map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-red-500">{skill.title}</h3>
                        <p className="text-sm text-gray-700">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};




const Projects = () => {
    return (
        <div id="projects" className="min-h-screen p-28">
            {/* Logo */}
            {/* <div className="mb-12">
                <a href="#" className="text-black text-2xl font-bold flex items-center">
                    <span className="text-red-500">―</span>Portafolio<span className="text-red-500">.</span>
                </a>
            </div> */}

            {/* Heading */}
            <div className="mb-16">
                <h1 className="text-black text-6xl font-bold mb-0">PROYECTOS</h1>
                <h2
                    className="text-white text-6xl font-bold leading-tight tracking-wider"
                    style={{
                        WebkitTextStroke: "2px black",
                        textStroke: "2px black",
                        color: "transparent",
                    }}
                >
                    RECIENTES
                </h2>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Project 1 */}
                <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                    <img
                        src="/src/assets/images/projects/ticolancer-home.png"
                        alt="GLC Marketing Banners"
                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h3 className="text-xl font-bold">Ticolancer</h3>
                            <p className="text-sm">Emprendimiento local</p>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                    <img
                        src="/src/assets/images/projects/jint-welcome.png"
                        alt="Cotton USA Exhibition"
                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h3 className="text-xl font-bold">Jint</h3>
                            <p className="text-sm">Manejo de tareas</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* WhatsApp Button */}
            <div className="fixed bottom-8 right-8">
                <a
                    href="https://wa.me/+50662076022"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                    <span>Consultas?</span>
                </a>
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
            {/* <Projects /> */}
        </>
    );
};

export default HomePage;