import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Jint = () => {
    return (
        <div id="jint" className="w-full py-40 text-center">
            {/* Título principal */}
            <h1 className="text-black text-5xl font-bold mb-8">Jint</h1>
            <p className="text-gray-600 text-xl mb-10">Gestión eficiente de tareas</p>
                <a href="https://github.com/Ebema260902/Jint" className="relative inline-block mb-10">
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
                        <img src="/src/assets/images/jint/jint5.png" alt="Jint Bienvenida"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/jint/jint1.png" alt="Jint Bienvenida"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/jint/jint2.png" alt="Jint Dashboard"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/jint/jint3.png" alt="Jint Tareas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/jint/jint4.png" alt="Jint Tareas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Descripción del proyecto */}
            <div className="max-w-4xl mx-auto py-10 text-left text-gray-800">
                <h2 className="text-3xl font-bold mb-6">Sobre el proyecto</h2>
                <p className="text-lg mb-6">
                    Jint es una plataforma de gestión de tareas diseñada para optimizar la productividad. 
                    Su interfaz intuitiva permite a los usuarios organizar proyectos, establecer prioridades 
                    y mejorar la colaboración en equipo.
                </p>

                <h2 className="text-3xl font-bold mb-6">Características principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Creación y organización de tareas</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Interfaz intuitiva y optimizada</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Priorización y asignación de proyectos</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Integración con herramientas de productividad</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jint;