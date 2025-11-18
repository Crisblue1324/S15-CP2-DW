import React, { useState } from "react";
import { motion } from "framer-motion";
import { mockSpecies } from "../../data/mockData";

const SpeciesTable = () => {
    const [sortBy, setSortBy] = useState("observations");
    const [sortOrder, setSortOrder] = useState("desc");

    const sortedSpecies = [...mockSpecies].sort((a, b) => {
        const modifier = sortOrder === "asc" ? 1 : -1;
        if (sortBy === "observations") {
            return (a.observations - b.observations) * modifier;
        }
        return a[sortBy].localeCompare(b[sortBy]) * modifier;
    });

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setSortOrder("desc");
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            "Least Concern": "bg-green-100 text-green-800",
            "Near Threatened": "bg-yellow-100 text-yellow-800",
            Vulnerable: "bg-orange-100 text-orange-800",
            Endangered: "bg-red-100 text-red-800",
        };
        return colors[status] || "bg-gray-100 text-gray-800";
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Resultados de Detección de Especies
                    </h2>
                    <p className="text-xl text-gray-600">
                        Datos de monitoreo en tiempo real desde la API de GBIF y observaciones de campo
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    {/* Encabezado */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
                        <h3 className="text-xl font-bold text-white">
                            Top 5 Especies Más Observadas
                        </h3>
                        <p className="text-green-100 text-sm mt-1">
                            Actualizado: Noviembre 2024 | Fuente: Base de datos GBIF
                        </p>
                    </div>

                    {/* Tabla */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSort("commonName")}
                                    >
                                        <div className="flex items-center gap-2">
                                            Especie
                                            {sortBy === "commonName" && <span>{sortOrder === "asc" ? "↑" : "↓"}</span>}
                                        </div>
                                    </th>
                                    <th
                                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSort("observations")}
                                    >
                                        <div className="flex items-center gap-2">
                                            Observaciones
                                            {sortBy === "observations" && <span>{sortOrder === "asc" ? "↑" : "↓"}</span>}
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Hábitat
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Estado
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Último Avistamiento
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
                                        whileHover={{ backgroundColor: "#f9fafb" }}
                                        className="cursor-pointer"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-gray-900">{index + 1}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
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
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className="text-lg font-bold text-gray-900">
                                                    {species.observations.toLocaleString()}
                                                </div>
                                                <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                                                        style={{ width: `${(species.observations / 1245) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {species.habitat}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                    species.conservationStatus
                                                )}`}
                                            >
                                                {species.conservationStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(species.lastSeen).toLocaleDateString("es-ES", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pie de tabla */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                Mostrando 5 de 342 especies monitoreadas
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Exportar CSV
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                                    Ver Informe Completo
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
