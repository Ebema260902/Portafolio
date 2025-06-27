import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Ticolancer = () => {
    return (
        <div id="ticolancer" className="w-full py-40 text-center">
            {/* Título principal */}
            <h1 className="text-black text-5xl font-bold mb-8">Ticolancer</h1>
            <p className="text-gray-600 text-xl mb-10">Plataforma de freelancers</p>
                <a href="https://github.com/Ebema260902/Ticolancer" className="relative inline-block mb-10">
                    <img 
                    className="w-[40px] mx-auto hover:scale-110 hover:border cursor-pointer rounded-full"  
                        src="/src/assets/images/icons/github-logo.png" 
                        alt="GitHub Logo"
                    />
                </a>

            {/* Slider más ordenado y centrado */}
            <div className="max-w-4xl mx-auto">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded-lg shadow-lg"
                >
                    <SwiperSlide>
                        <img src="/src/assets/images/projects/ticolancer-home.png" alt="Ticolancer Home"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer1.png" alt="Ticolancer Home"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer2.png" alt="Ticolancer Dashboard"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer3.png" alt="Ticolancer Perfil"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer4.png" alt="Ticolancer Perfil"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer5.png" alt="Ticolancer Perfil"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer6.png" alt="Ticolancer Perfil"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/ticolancer/ticolancer7.png" alt="Ticolancer Perfil"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Descripción del proyecto */}
            <div className="max-w-4xl mx-auto py-10 text-left text-gray-800">
                <h2 className="text-3xl font-bold mb-6">Sobre el proyecto</h2>
                <p className="text-lg mb-6">
                    Ticolancer es una plataforma diseñada para conectar freelancers con oportunidades de trabajo en diversos sectores.
                    La interfaz intuitiva permite la creación de perfiles profesionales, publicación de proyectos y gestión de contratos de manera eficiente.
                </p>

                <h2 className="text-3xl font-bold mb-6">Características principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Interfaz moderna y accesible</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Gestión de perfiles y portafolios</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Publicación y búsqueda de trabajos</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Seguridad en pagos y contratos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticolancer;