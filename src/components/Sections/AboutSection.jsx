import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Modelos de Aprendizaje Profundo',
      description: 'Swin-Mask R-CNN, DenseNet, ResNet-18 para detección y clasificación de especies con >90% de precisión',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🛰️',
      title: 'Teledetección',
      description: 'Integración de imágenes satelitales, LiDAR y datos de UAV para monitoreo de hábitats a gran escala',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: '🔊',
      title: 'Monitoreo Acústico',
      description: 'Monitoreo acústico pasivo con índices eco-acústicos (ACI, BI, NDSI) para biodiversidad de aves',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: '👥',
      title: 'Ciencia Ciudadana',
      description: 'Integración con la base GBIF y observaciones de la comunidad urbana',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: '📊',
      title: 'Análisis en Tiempo Real',
      description: 'Sensores IoT y computación en la nube para evaluación continua de la biodiversidad',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: '🗺️',
      title: 'Integración GIS',
      description: 'Herramientas de análisis espacial para modelar redes de hábitats y planificación de conservación',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  const challenges = [
    'Pérdida y fragmentación de hábitats',
    'Recursos limitados para monitoreo',
    'Calidad y disponibilidad de datos',
    'Escala de los ecosistemas urbanos',
    'Interacciones socio-ecológicas complejas'
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Sistema Basado en Investigación
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Marco de Monitoreo de Biodiversidad Urbana<br />Impulsado por IA
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Este sistema replica el marco presentado en el artículo
            <span className="font-semibold"> "Inteligencia Artificial para la Biodiversidad Urbana Sostenible:
            Un Marco para Monitoreo y Conservación"</span> de Yasmin Rahmati (2025),
            Universidad de Copenhague.
          </p>
        </motion.div>

        {/* Declaración del Problema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 mb-12 border-2 border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Desafíos de la Biodiversidad Urbana
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La rápida urbanización representa amenazas significativas para la biodiversidad a través de la fragmentación de hábitats, contaminación y degradación de ecosistemas. Los métodos tradicionales de monitoreo suelen ser lentos, costosos y limitados en escala.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Este marco aborda estos desafíos aprovechando la inteligencia artificial para permitir el monitoreo de biodiversidad en tiempo real y a gran escala, y una planificación de conservación basada en evidencia.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4">Principales Desafíos:</h4>
              <ul className="space-y-3">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cita de Investigación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <div className="text-5xl">📄</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Cita del Artículo</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-white/90 leading-relaxed font-mono text-sm">
                  Rahmati, Y. (2025). Inteligencia Artificial para la Biodiversidad Urbana Sostenible:
                  Un Marco para Monitoreo y Conservación. <em>Global Environment and Development</em>,
                  Universidad de Copenhague, Dinamarca. arXiv:2501.14766
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://arxiv.org/pdf/2501.14766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  📥 Descargar PDF
                </a>

                <a
                  href="https://arxiv.org/abs/2501.14766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  🔗 Ver en arXiv
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
