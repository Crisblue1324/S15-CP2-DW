import React from 'react';
import { motion } from 'framer-motion';

const MapLegend = ({ showHeatmap, onToggleHeatmap }) => {
  const legendItems = [
    {
      color: 'bg-green-500',
      label: 'Alta biodiversidad',
      description: '> 0.9 índice',
      count: 2
    },
    {
      color: 'bg-blue-500',
      label: 'Biodiversidad media',
      description: '0.8 - 0.9 índice',
      count: 2
    },
    {
      color: 'bg-red-500',
      label: 'Baja biodiversidad',
      description: '< 0.8 índice',
      count: 1
    }
  ];

  const mapLayers = [
    {
      icon: '🌳',
      label: 'Marcadores de especies',
      enabled: true,
      color: 'text-green-600'
    },
    {
      icon: '🔴',
      label: 'Puntos críticos de biodiversidad',
      enabled: showHeatmap,
      color: 'text-red-600',
      toggle: true
    },
    {
      icon: '📍',
      label: 'Centros de clúster',
      enabled: true,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Map Layers Control */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl shadow-xl p-4 border border-gray-200"
      >
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Capas del mapa
        </h3>

        <div className="space-y-2">
          {mapLayers.map((layer, index) => (
            <div key={index} className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layer.enabled}
                  onChange={layer.toggle ? onToggleHeatmap : undefined}
                  disabled={!layer.toggle}
                  className="w-4 h-4 text-green-600 rounded"
                />
                <span className="text-xl">{layer.icon}</span>
                <span className="text-sm font-medium text-gray-700">{layer.label}</span>
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-xl p-4 border border-gray-200"
      >
        <h3 className="font-bold text-gray-800 mb-3">Leyenda de biodiversidad</h3>

        <div className="space-y-2">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${item.color} shadow-md`}></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
              <div className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {item.count}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600">
            <div className="flex items-center justify-between mb-1">
              <span>Total clústeres:</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Promedio índice:</span>
              <span className="font-semibold text-green-600">0.86</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 border-2 border-blue-200"
      >
        <div className="text-xs text-gray-700 leading-relaxed">
          <p className="font-semibold mb-2">💡 Instrucciones del mapa:</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li>Haz clic en los marcadores para ver detalles de especies</li>
            <li>Haz clic en los círculos para ver información del clúster</li>
            <li>Acércate o aléjate para una mejor visualización</li>
            <li>Activa o desactiva capas para diferentes vistas</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MapLegend;
