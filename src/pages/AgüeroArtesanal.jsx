import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AgueroArtesanal = () => {
    const technologies = [
        { src: "assets/images/icons/wordpress.png", name: "WordPress" },
        { src: "assets/images/icons/elementor.webp", name: "Elementor" },
        { src: "assets/images/icons/gutenberg.webp", name: "Gutenberg" },
        { src: "assets/images/icons/github-logo.png", name: "GitHub" },
    ];

    return (
        <div id="agueroartesanal" className="w-full py-48 text-center">
            <h1 className="text-black text-6xl font-bold mb-8">Agüero Artesanal</h1>
            <p className="text-gray-600 text-2xl mb-14 max-w-xl mx-auto">
                Tienda de productos en madera
            </p>
            <a href="https://dev-aguero-artesanal.pantheonsite.io/" className="inline-block mb-14">
                <img
                    className="w-[48px] mx-auto hover:scale-110 border transition-transform duration-300 cursor-pointer rounded-full"
                    src="assets/images/icons/view.png"
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
                    {[...Array(5)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src="assets/images/agueroartesanal/agueroartesanal.png"
                                alt="Agüero Artesanal"
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
                    Agüero Artesanal es una tienda en línea dedicada a la creación y venta de productos en madera hechos a mano.
                    Con un enfoque en la calidad y el diseño, ofrecemos artículos únicos como mesas pequeñas, estantes, cuadros tallados y más.
                    Nuestra plataforma permite a los clientes explorar nuestro catálogo, realizar pedidos personalizados y contactar directamente para cotizaciones, todo de forma fácil y accesible.
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
                        "✅ Catálogo dinámico de productos con filtros por categoría",
                        "✅ Integración con WhatsApp para contacto rápido y pedidos",
                        "✅ Sitio responsivo optimizado para dispositivos móviles",
                        "✅ Construido con WordPress + plugins personalizados"
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

export default AgueroArtesanal;
