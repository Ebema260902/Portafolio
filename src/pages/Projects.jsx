import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Projects = () => {
    return (
        <div id="projects" className="py-40 px-4 sm:px-6 text-center">
            <h1 className="text-black text-5xl font-bold mb-6">PROYECTOS</h1>
            <p className="text-gray-600 text-xl mb-10">Algunos de los trabajos que he desarrollado</p>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
                
                {/* Proyecto 1 */}
                <Link to="/ticolancer" className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border border-gray-300">
                    <img src="assets/images/ticolancer/ticolancer3.1.png" alt="Ticolancer" 
                        className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0   transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center bg-blue-800 rounded-full p-4 w-40">
                            <h3 className="text-xl font-bold">Ticolancer</h3>
                        </div>
                    </div>
                </Link>


                {/* Proyecto 2 */}
                <Link to="/Jint" className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border border-gray-300">
                    <img src="assets/images/jint/jint1.png" alt="Jint" 
                         className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center bg-blue-800 rounded-full p-4 w-40">
                            <h3 className="text-xl font-bold">Jint</h3>
                        </div>
                    </div>
                </Link>

                {/* Proyecto 3 */}
                <Link to="/kimchis" className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border border-gray-300">
                    <img src="assets/images/kimchis/kimchis1.png" alt="Kimchis" 
                         className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center bg-blue-800 rounded-full p-4 w-40">
                            <h3 className="text-xl font-bold birder">Kimchis</h3>
                        </div>
                    </div>
                </Link>

                {/* Proyecto 4 */}
                <Link to="/agueroartesanal" className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border border-gray-300">
                    <img src="assets/images/agueroartesanal/agueroartesanal.png" alt="Agüero Artesanal" 
                         className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center bg-blue-800 rounded-full p-4 w-40">
                            <h3 className="text-xl font-bold birder">Ag. Artesanal</h3>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Projects;