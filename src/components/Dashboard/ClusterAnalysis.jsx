import React from 'react';
import {motion} from 'framer-motion';
import {mockClusters} from '../../data/mockData';

const ClusterAnalysis = () => {
    const getScoreColor = (score) => {
        if (score > 0.9) return 'text-green-600 bg-green-100';
        if (score > 0.8) return 'text-blue-600 bg-blue-100';
        return 'text-orange-600 bg-orange-100';
    };

    const getScoreLabel = (score) => {
        if (score > 0.9) return 'Excelente';
        if (score > 0.8) return 'Bueno';
        return 'Moderado';
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Análisis de Clústeres K-Means
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Identificación de zonas de alta biodiversidad mediante algoritmos
                        de agrupamiento basados en aprendizaje automático
                    </p>
                </motion.div>

                {/* Información de Metodología */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 mb-12 border-2 border-purple-200"
                >
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-600 rounded-full p-3 text-white text-2xl">
                            🔬
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Metodología de Agrupamiento
                            </h3>
                            <p className="text-gray-700 mb-4">
                                El algoritmo K-Means agrupa observaciones de especies en clústeres
                                espaciales basados en coordenadas geográficas y densidad de especies.
                                Cada clúster representa un punto potencial de biodiversidad con
                                características ecológicas particulares.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div className="bg-white rounded-lg p-3">
                                    <div className="font-semibold text-purple-600">Algoritmo</div>
                                    <div className="text-gray-600">K-Means (k=5)</div>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                    <div className="font-semibold text-purple-600">Características</div>
                                    <div className="text-gray-600">Latitud, Longitud, Número de especies</div>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                    <div className="font-semibold text-purple-600">Librería</div>
                                    <div className="text-gray-600">scikit-learn (Python)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tarjetas de Clúster */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockClusters.map((cluster, index) => (
                        <motion.div
                            key={cluster.id}
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
                        >
                            {/* Encabezado */}
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white">
                                        Clúster #{cluster.id}
                                    </h3>
                                    <div
                                        className={`px-3 py-1 rounded-full text-xs font-bold ${getScoreColor(cluster.biodiversityScore)}`}>
                                        {getScoreLabel(cluster.biodiversityScore)}
                                    </div>
                                </div>
                                <div className="text-white/90 text-sm mt-1">
                                    {cluster.habitatType}
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                {/* Puntaje de Biodiversidad */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-600">
                                            Índice de Biodiversidad
                                        </span>
                                        <span className="text-2xl font-bold text-green-600">
                                            {(cluster.biodiversityScore * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                                            style={{width: `${cluster.biodiversityScore * 100}%`}}/>
                                    </div>
                                </div>

                                {/* Métricas */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm text-gray-600">Cantidad de Especies</span>
                                        <span className="text-lg font-bold text-gray-900">
                                            {cluster.speciesCount}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm text-gray-600">Área</span>
                                        <span className="text-lg font-bold text-gray-900">
                                            {cluster.area} km²
                                        </span>
                                    </div>
                                </div>

                                {/* Coordenadas */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="text-xs text-gray-500 mb-2">Coordenadas Centrales</div>
                                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                                        {cluster.centerLat.toFixed(4)}, {cluster.centerLng.toFixed(4)}
                                    </div>
                                </div>

                                {/* Especies Dominantes */}
                                <div className="mt-4">
                                    <div className="text-xs font-semibold text-gray-600 mb-2">
                                        Especies Dominantes
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cluster.dominantSpecies.map((species, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                                            >
                                                {species.split(' ')[0]}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                                <button
                                    className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                                    Ver análisis detallado →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Estadísticas Resumen */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                >
                    <h3 className="text-2xl font-bold mb-6">Resumen del Análisis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-3xl font-bold">5</div>
                            <div className="text-blue-100 text-sm mt-1">Total de Clústeres</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">
                                {mockClusters.reduce((sum, c) => sum + c.speciesCount, 0)}
                            </div>
                            <div className="text-blue-100 text-sm mt-1">Total de Especies</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">
                                {mockClusters.reduce((sum, c) => sum + c.area, 0).toFixed(1)} km²
                            </div>
                            <div className="text-blue-100 text-sm mt-1">Área Total</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">
                                {(mockClusters.reduce((sum, c) => sum + c.biodiversityScore, 0) / mockClusters.length).toFixed(2)}
                            </div>
                            <div className="text-blue-100 text-sm mt-1">Promedio de Biodiversidad</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClusterAnalysis;
