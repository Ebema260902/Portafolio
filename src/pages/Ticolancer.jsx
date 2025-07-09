import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Ticolancer = () => {
    const technologies = [
        { src: "assets/images/icons/php.png", name: "PHP" },
        { src: "assets/images/icons/heidisql.png", name: "HeidiSQL" },
        { src: "assets/images/icons/laravel.png", name: "Laravel" },
        { src: "assets/images/icons/react.png", name: "React" },
        { src: "assets/images/icons/tailwind.png", name: "Tailwind CSS" },
        { src: "assets/images/icons/js.webp", name: "JavaScript" },
        { src: "assets/images/icons/html.png", name: "HTML5" },
        { src: "assets/images/icons/css.png", name: "CSS3" },
        { src: "assets/images/icons/github-logo.png", name: "GitHub" },
    ];

    return (
        <div id="ticolancer" className="w-full py-48 text-center">
            {/* Título principal */}
            <h1 className="text-black text-6xl font-bold mb-8">Ticolancer</h1>
            <p className="text-gray-600 text-2xl mb-14 max-w-xl mx-auto">
                Plataforma de freelancers
            </p>
            <a href="https://github.com/Ebema260902/Ticolancer" className="inline-block mb-14">
                <img
                    className="w-[48px] mx-auto hover:scale-110 hover:border transition-transform duration-300 cursor-pointer rounded-full"
                    src="assets/images/icons/github-logo.png"
                    alt="GitHub Logo"
                />
            </a>

            {/* Slider */}
            <div className="max-w-5xl mx-auto mb-24">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3500 }}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded-lg shadow-lg"
                >
                    {[
                        "ticolancer-home",
                        "ticolancer1",
                        "ticolancer2",
                        "ticolancer3",
                        "ticolancer4",
                        "ticolancer5",
                        "ticolancer6",
                        "ticolancer7",
                    ].map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={`assets/images/ticolancer/${img}.png`}
                                alt={`Ticolancer ${img}`}
                                className="w-full h-[440px] object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Contenido descriptivo */}
            <div className="max-w-4xl mx-auto px-6 text-left text-gray-800">
                {/* Sobre el proyecto */}
                <h2 className="text-4xl font-bold mb-10 text-center">Sobre el proyecto</h2>
                <p className="text-xl mb-20 leading-relaxed text-center max-w-3xl mx-auto">
                    Ticolancer es una plataforma diseñada para conectar freelancers con oportunidades de trabajo en diversos sectores.
                    La interfaz intuitiva permite la creación de perfiles profesionales, publicación de proyectos y gestión de contratos de manera eficiente.
                </p>

                {/* Tecnologías utilizadas */}
                <h2 className="text-4xl font-bold mb-14 text-center">Tecnologías utilizadas</h2>
                <div className="flex flex-wrap justify-center gap-16 items-center mb-28">
                    {technologies.map((tech, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="w-16 h-16 transition-transform duration-300 transform group-hover:scale-110 cursor-pointer"
                            />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Características principales */}
                <h2 className="text-4xl font-bold mb-10 text-center">Características principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg">
                    {[
                        "✅ Interfaz moderna y accesible",
                        "✅ Gestión de perfiles y portafolios",
                        "✅ Publicación y búsqueda de trabajos",
                        "✅ Seguridad en pagos y contratos",
                    ].map((feature, i) => (
                        <div key={i} className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <p>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ticolancer;
