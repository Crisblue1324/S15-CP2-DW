import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockSpecies } from '../../data/mockData';

const SpeciesTable = () => {
    const [sortBy, setSortBy] = useState('commonName'); // Cambiado de 'observations' a 'commonName'
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedSpecies = [...mockSpecies].sort((a, b) => {
        const modifier = sortOrder === 'asc' ? 1 : -1;
        return a[sortBy].localeCompare(b[sortBy]) * modifier;
    });

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            'Least Concern': 'bg-green-100 text-green-800',
            'Near Threatened': 'bg-yellow-100 text-yellow-800',
            'Vulnerable': 'bg-orange-100 text-orange-800',
            'Endangered': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Tabla de Especies Monitoreadas
                    </h2>
                    <p className="text-xl text-gray-600">
                        Datos de monitoreo en tiempo real desde la API de GBIF
                    </p>
                </motion.div>

                {/* Table Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    {/* Table Header */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
                        <h3 className="text-xl font-bold text-white">
                            Top 5 Especies Monitoreadas
                        </h3>
                        <p className="text-green-100 text-sm mt-1">
                            Actualizado: Noviembre 2024 | Fuente: Base de Datos GBIF
                        </p>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSort('commonName')}
                                    >
                                        <div className="flex items-center gap-2">
                                            Especie
                                            {sortBy === 'commonName' && (
                                                <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                                            )}
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Hábitat
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Estado de Conservación
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Último Registro
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {sortedSpecies.map((species, index) => (
                                    <motion.tr
                                        key={species.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ backgroundColor: '#f9fafb' }}
                                        className="cursor-pointer"
                                    >
                                        {/* Position */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-gray-900">
                                                {index + 1}
                                            </div>
                                        </td>

                                        {/* Name */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                                                    {species.commonName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        {species.commonName}
                                                    </div>
                                                    <div className="text-xs text-gray-500 italic">
                                                        {species.scientificName}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Habitat */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {species.habitat}
                                            </span>
                                        </td>

                                        {/* Conservation Status */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                    species.conservationStatus
                                                )}`}
                                            >
                                                {species.conservationStatus}
                                            </span>
                                        </td>

                                        {/* Last Seen */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(species.lastSeen).toLocaleDateString('es-ES', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                Mostrando 5 de {mockSpecies.length} especies monitoreadas
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Exportar CSV
                                </button>
                                <button
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                                    Ver Reporte Completo
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SpeciesTable;
