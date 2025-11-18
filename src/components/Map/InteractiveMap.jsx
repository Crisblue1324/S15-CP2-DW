import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {mockClusters, mockSpecies} from '../../data/mockData';
import {motion} from 'framer-motion';

// Fix iconos Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const InteractiveMap = () => {
    const [selectedCluster, setSelectedCluster] = useState(null);
    const [showHeatmap, setShowHeatmap] = useState(true);

    const getClusterColor = (score) => {
        if (score > 0.9) return '#10b981'; // green
        if (score > 0.8) return '#3b82f6'; // blue
        return '#ef4444'; // red
    };

    return (
        <div className="relative">
            {/* Controles del Mapa */}
            <div className="absolute top-4 right-4 z-[1000] space-y-2">
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    className="bg-white rounded-lg shadow-xl p-4 space-y-3"
                >
                    <h3 className="font-bold text-gray-800">Capas del Mapa</h3>

                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showHeatmap}
                            onChange={() => setShowHeatmap(!showHeatmap)}
                            className="w-4 h-4 text-green-600 rounded"
                        />
                        <span className="text-sm">Zonas de Alta Biodiversidad</span>
                    </label>

                    <div className="pt-3 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-600 mb-2">Leyenda</div>
                        <div className="space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>Alta (&gt;0.9)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span>Media (0.8 - 0.9)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span>Baja (&lt;0.8)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {selectedCluster && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        className="bg-white rounded-lg shadow-xl p-4 max-w-xs"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">Clúster #{selectedCluster.id}</h4>
                            <button
                                onClick={() => setSelectedCluster(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Número de Especies:</span>
                                <span className="font-semibold">{selectedCluster.speciesCount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Área:</span>
                                <span className="font-semibold">{selectedCluster.area} km²</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Índice de Biodiversidad:</span>
                                <span className="font-semibold text-green-600">
                                    {(selectedCluster.biodiversityScore * 100).toFixed(1)}%
                                </span>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                                <span className="text-gray-600 block mb-1">Tipo de Hábitat:</span>
                                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                    {selectedCluster.habitatType}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Mapa Principal */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <MapContainer
                    center={[55.6761, 12.5683]}
                    zoom={13}
                    style={{height: '600px', width: '100%'}}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Marcadores de especies */}
                    {mockSpecies.map((species) => (
                        <Marker key={species.id} position={species.coordinates}>
                            <Popup>
                                <div className="p-2">
                                    <h3 className="font-bold text-lg">{species.commonName}</h3>
                                    <p className="text-sm italic text-gray-600">{species.scientificName}</p>
                                    <div className="mt-2 space-y-1 text-xs">
                                        <p><strong>Observaciones:</strong> {species.observations}</p>
                                        <p><strong>Último Avistamiento:</strong> {species.lastSeen}</p>
                                        <p><strong>Hábitat:</strong> {species.habitat}</p>
                                        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mt-2">
                                            {species.conservationStatus}
                                        </span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    {/* Zonas del Clúster */}
                    {showHeatmap && mockClusters.map((cluster) => (
                        <Circle
                            key={cluster.id}
                            center={[cluster.centerLat, cluster.centerLng]}
                            radius={cluster.area * 500}
                            pathOptions={{
                                color: getClusterColor(cluster.biodiversityScore),
                                fillColor: getClusterColor(cluster.biodiversityScore),
                                fillOpacity: 0.2,
                                weight: 2
                            }}
                            eventHandlers={{
                                click: () => setSelectedCluster(cluster)
                            }}
                        />
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default InteractiveMap;
