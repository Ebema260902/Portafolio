import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Kimchis = () => {
    return (
        <div id="kimchis" className="w-full py-40 text-center">
            {/* Título principal */}
            <h1 className="text-black text-5xl font-bold mb-8">Kimchis</h1>
            <p className="text-gray-600 text-xl mb-10">Restaurante de comida coreana</p>
                <a href="https://github.com/Ebema260902/backend-kimchis" className="relative inline-block mb-10">
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
                        <img src="/src/assets/images/kimchis/kimchis1.png" alt="Kimchis Home"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/kimchis/kimchis2.png" alt="Kimchis Menú"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/kimchis/kimchis3.png" alt="Kimchis Reservas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/kimchis/kimchis4.png" alt="Kimchis Reservas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/kimchis/kimchis5.png" alt="Kimchis Reservas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/kimchis/kimchis6.png" alt="Kimchis Reservas"
                            className="w-full h-[400px] object-cover rounded-lg"/>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Descripción del proyecto */}
            <div className="max-w-4xl mx-auto py-10 text-left text-gray-800">
                <h2 className="text-3xl font-bold mb-6">Sobre el proyecto</h2>
                <p className="text-lg mb-6">
                    Kimchis es una plataforma digital creada para mejorar la experiencia gastronómica. 
                    Permite a los clientes explorar el menú, hacer reservas en línea y descubrir ofertas especiales 
                    del restaurante de comida coreana.
                </p>

                <h2 className="text-3xl font-bold mb-6">Características principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Menú digital interactivo</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Sistema de reservas en línea</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Promociones y descuentos exclusivos</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p>✅ Interfaz optimizada para móviles</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kimchis;