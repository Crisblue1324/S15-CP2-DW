import React from 'react';
import {motion} from 'framer-motion';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from 'recharts';

const ResultsSection = () => {
    const impactData = [
        {name: 'Detección de Especies', value: 93.81},
        {name: 'Predicción de Hábitat', value: 87.6},
        {name: 'Clustering', value: 96.2},
        {name: 'Procesamiento en Tiempo Real', value: 91.5}
    ];

    const conservationImpact = [
        {subject: 'Eficiencia de Monitoreo', A: 95, fullMark: 100},
        {subject: 'Calidad de Datos', A: 88, fullMark: 100},
        {subject: 'Reducción de Costos', A: 75, fullMark: 100},
        {subject: 'Escalabilidad', A: 92, fullMark: 100},
        {subject: 'Participación Comunitaria', A: 78, fullMark: 100}
    ];

    const distributionData = [
        {name: 'Parques Urbanos', value: 35},
        {name: 'Áreas Protegidas', value: 28},
        {name: 'Residencial', value: 20},
        {name: 'Comercial', value: 10},
        {name: 'Industrial', value: 7}
    ];

    const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

    const outcomes = [
        {
            icon: '🎯',
            title: 'Detección Mejorada',
            value: '+18.5%',
            description: 'Mejora sobre métodos tradicionales',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: '⚡',
            title: 'Velocidad de Procesamiento',
            value: '10x',
            description: 'Más rápido que los levantamientos manuales',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: '💰',
            title: 'Eficiencia de Costos',
            value: '-65%',
            description: 'Reducción en los costos de monitoreo',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: '📈',
            title: 'Escala de Cobertura',
            value: '100x',
            description: 'Monitoreo de áreas más grandes',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Encabezado */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Resultados e Impacto
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Resultados cuantitativos que demuestran la efectividad del monitoreo de biodiversidad
                        impulsado por IA en entornos urbanos
                    </p>
                </motion.div>

                {/* Resultados Clave */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                            <div
                                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                                <div className="text-5xl mb-4">{outcome.icon}</div>
                                <div
                                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent`}>
                                    {outcome.value}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {outcome.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {outcome.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gráficos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Métricas de IA */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Rendimiento del Modelo de IA
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={impactData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({name, value}) => `${name}: ${value}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {impactData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {impactData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{backgroundColor: COLORS[index % COLORS.length]}}
                                    ></div>
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Impacto en Conservación */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Evaluación de Impacto en Conservación
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={conservationImpact}>
                                <PolarGrid stroke="#e5e7eb"/>
                                <PolarAngleAxis dataKey="subject" tick={{fill: '#6b7280', fontSize: 12}}/>
                                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{fill: '#6b7280'}}/>
                                <Radar name="Puntaje de Impacto" dataKey="A" stroke="#10b981" fill="#10b981"
                                       fillOpacity={0.6}/>
                            </RadarChart>
                        </ResponsiveContainer>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Puntaje promedio de impacto: <span className="font-bold text-green-600">85.6/100</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Hallazgos Clave */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="bg-white rounded-2xl shadow-xl p-10 mb-16 border border-gray-100"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Hallazgos de Investigación Clave
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border-l-4 border-green-500 pl-6">
                            <div className="text-sm font-semibold text-green-600 mb-2">HALLAZGO 1</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                                Detección de Especies Mejorada con IA
                            </h4>
                            <p className="text-gray-600">
                                La IA mejora la detección y monitoreo de especies, logrando más del 90% de precisión
                                en el seguimiento de fauna urbana y manejo de especies invasoras.
                            </p>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-6">
                            <div className="text-sm font-semibold text-blue-600 mb-2">HALLAZGO 2</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                                Integración de Datos Multifuente
                            </h4>
                            <p className="text-gray-600">
                                La integración de datos de teledetección, monitoreo acústico y ciencia ciudadana
                                permite análisis de ecosistemas a gran escala.
                            </p>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-6">
                            <div className="text-sm font-semibold text-purple-600 mb-2">HALLAZGO 3</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                                Planificación de Conservación Mejorada
                            </h4>
                            <p className="text-gray-600">
                                Las herramientas de decisión basadas en IA mejoran la planificación de conservación y
                                la asignación de recursos, aumentando la precisión de predicción hasta en un 18.5%.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Distribución de Hábitat */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-10 text-white"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        Distribución de Biodiversidad por Tipo de Hábitat
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={distributionData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {distributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="space-y-4">
                            {distributionData.map((item, index) => (
                                <div key={index}
                                     className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{backgroundColor: COLORS[index % COLORS.length]}}
                                        ></div>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    <span className="text-2xl font-bold">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-white/90">
                            Basado en 8,547 observaciones de 342 especies en ecosistemas urbanos
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ResultsSection;
