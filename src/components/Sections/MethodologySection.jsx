import React from 'react';
import {motion} from 'framer-motion';
import {frameworkLayers, researchStudies} from '../../data/mockData';

const MethodologySection = () => {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Encabezado */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Metodología y Marco de Trabajo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Arquitectura jerárquica de cinco capas para la conservación y gestión de biodiversidad
                        habilitada por IA
                    </p>
                </motion.div>

                {/* Visualización del Marco */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-16"
                >
                    <div
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 border-2 border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Arquitectura Jerárquica del Marco
                        </h3>

                        <div className="space-y-6">
                            {frameworkLayers.map((layer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1}}
                                    className="relative"
                                >
                                    <div
                                        className={`bg-gradient-to-r ${layer.color} rounded-2xl p-6 text-white shadow-xl`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div
                                                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                                                        {index + 1}
                                                    </div>
                                                    <h4 className="text-xl font-bold">{layer.layerES || layer.layer}</h4>
                                                </div>
                                                <p className="text-white/90 text-sm pl-11">
                                                    {layer.descriptionES || layer.description}
                                                </p>
                                            </div>
                                            {index < frameworkLayers.length - 1 && (
                                                <div className="ml-4">
                                                    <svg className="w-6 h-6 text-white/50" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Flecha entre capas */}
                                    {index < frameworkLayers.length - 1 && (
                                        <div className="flex justify-center py-2">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                                      d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                                            </svg>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Indicador de Bucle de Retroalimentación */}
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{delay: 0.5}}
                            className="mt-8 text-center"
                        >
                            <div
                                className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                                Bucle de Retroalimentación Continua para Gestión Adaptativa
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Pipeline de Procesamiento de Datos */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Flujo de Procesamiento de Datos
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            {
                                step: 1,
                                title: 'Recolección de Datos',
                                icon: '📡',
                                desc: 'Adquisición de datos de múltiples fuentes'
                            },
                            {step: 2, title: 'Preprocesamiento', icon: '⚙️', desc: 'Limpieza y normalización'},
                            {step: 3, title: 'Análisis con IA', icon: '🧠', desc: 'Modelos de aprendizaje profundo'},
                            {step: 4, title: 'Visualización', icon: '📊', desc: 'Dashboards interactivos'}
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.9}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="relative"
                            >
                                <div
                                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 text-center hover:border-blue-500 transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-sm font-semibold text-gray-500 mb-1">
                                        PASO {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>

                                {index < 3 && (
                                    <div
                                        className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tabla de Estudios de Investigación */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Estudios de Investigación de Apoyo
                    </h3>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Estudio</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Método de IA</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Precisión</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Aplicación</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Ubicación</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {researchStudies.map((study, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{delay: index * 0.1}}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {study.authors}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {study.methodES || study.method}
                        </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-green-600">
                                            {study.accuracy}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {study.applicationES || study.application}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {study.location}
                                        </td>
                                    </motion.tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-center">
                            <p className="text-sm text-gray-600">
                                <strong>Fuente:</strong> Tabla 1 del artículo - Análisis de aplicaciones de IA en
                                estudios de biodiversidad urbana (2020-2024)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MethodologySection;
