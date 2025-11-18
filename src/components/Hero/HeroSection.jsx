import React from 'react';
import {motion} from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white overflow-hidden">
            {/* Fondo animado */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center"
                >
                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        🌿 Inteligencia Artificial para<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                            Biodiversidad Urbana Sostenible
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Un marco para el monitoreo y conservación usando aprendizaje profundo,
                        teledetección y análisis de datos en tiempo real
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-green-300">93.81%</div>
                            <div className="text-sm text-gray-300">Precisión de Detección IA</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-300">342</div>
                            <div className="text-sm text-gray-300">Especies Monitoreadas</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-300">8,547</div>
                            <div className="text-sm text-gray-300">Observaciones</div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Explorar Dashboard
                        </button>
                        <button
                            className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                            Ver Artículo de Investigación
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Onda decorativa */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 fill-current text-gray-50">
                    <path
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
