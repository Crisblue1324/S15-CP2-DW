import React from 'react';
import { motion } from 'framer-motion';
import { aiMetrics, mockCities } from '../../data/mockData';

const MetricsGrid = () => {
    const metrics = [
        {
            icon: '🎯',
            title: 'Precisión de Detección',
            value: `${aiMetrics.detectionAccuracy}%`,
            subtitle: 'Modelo DenseNet_BC_34',
            color: 'from-blue-500 to-blue-600',
            description: 'Clasificación acústica en bosques urbanos'
        },
        {
            icon: '🌿',
            title: 'Identificación de Especies',
            value: `${aiMetrics.speciesIdentification}%`,
            subtitle: 'Algoritmo DeepLabv3+',
            color: 'from-green-500 to-green-600',
            description: 'Monitoreo de plantas acuáticas invasoras'
        },
        {
            icon: '🏞️',
            title: 'Predicción de Hábitat',
            value: `${aiMetrics.habitatPrediction}%`,
            subtitle: 'CNN de múltiples tareas',
            color: 'from-purple-500 to-purple-600',
            description: 'Precisión en mapeo de especies arbóreas'
        },
        {
            icon: '🔬',
            title: 'Rendimiento en Clustering',
            value: `${aiMetrics.clusteringPerformance}%`,
            subtitle: 'Modelo ResNet-18',
            color: 'from-orange-500 to-orange-600',
            description: 'Detección de especies invasoras'
        },
        {
            icon: '⚡',
            title: 'Procesamiento en Tiempo Real',
            value: aiMetrics.realTimeProcessing,
            subtitle: 'Análisis de datos en vivo',
            color: 'from-yellow-500 to-yellow-600',
            description: 'Capacidad de monitoreo continuo'
        },
        {
            icon: '📊',
            title: 'Fuentes de Datos',
            value: '3+',
            subtitle: 'Sistemas Integrados',
            color: 'from-pink-500 to-pink-600',
            description: 'GBIF, Sensores Remotos, Ciencia Ciudadana'
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Métricas de Rendimiento de IA
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Basado en estudios científicos revisados por pares (2020-2024),
                        demostrando resultados de última generación en monitoreo de biodiversidad urbana.
                    </p>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                                <div className={`text-5xl mb-4 bg-gradient-to-r ${metric.color} bg-clip-text`}>
                                    {metric.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {metric.title}
                                </h3>

                                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                                    {metric.value}
                                </div>

                                <div className="text-sm text-gray-600 mb-3">
                                    {metric.subtitle}
                                </div>

                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {metric.description}
                                </p>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Fuente: Artículo Científico</span>
                                        <span className="text-green-600">✓ Verificado</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* City Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-white rounded-2xl p-8 shadow-xl"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Estadísticas de Biodiversidad por Ciudad
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mockCities.map((city) => (
                            <div key={city.id} className="border-l-4 border-green-500 pl-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">
                                    {city.name}, {city.country}
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total de Especies:</span>
                                        <span className="font-semibold">{city.totalSpecies}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Observaciones:</span>
                                        <span className="font-semibold">{city.totalObservations.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Índice de Biodiversidad:</span>
                                        <span className="font-semibold text-green-600">{city.biodiversityIndex}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Cobertura Verde:</span>
                                        <span className="font-semibold">{city.greenCoverage}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MetricsGrid;
