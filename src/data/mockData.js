export const mockCities = [
    {
        id: 1,
        name: 'Copenhague',
        country: 'Dinamarca',
        coordinates: [55.6761, 12.5683],
        totalSpecies: 342,
        totalObservations: 8547,
        biodiversityIndex: 0.87,
        urbanArea: 179.8,
        greenCoverage: 45.2
    },
    {
        id: 2,
        name: 'San José',
        country: 'Estados Unidos',
        coordinates: [37.3382, -121.8863],
        totalSpecies: 289,
        totalObservations: 6234,
        biodiversityIndex: 0.79,
        urbanArea: 467.2,
        greenCoverage: 38.7
    },
    {
        id: 3,
        name: 'Leipzig',
        country: 'Alemania',
        coordinates: [51.3397, 12.3731],
        totalSpecies: 421,
        totalObservations: 9823,
        biodiversityIndex: 0.92,
        urbanArea: 297.8,
        greenCoverage: 52.3
    }
];

export const mockSpecies = [
    {
        id: 1,
        scientificName: 'Passer domesticus',
        commonName: 'Gorrión común',
        observations: 1245,
        lastSeen: '2024-11-15',
        conservationStatus: 'Preocupación menor',
        habitat: 'Parques urbanos',
        coordinates: [55.6861, 12.5783]
    },
    {
        id: 2,
        scientificName: 'Turdus merula',
        commonName: 'Mirlo común',
        observations: 987,
        lastSeen: '2024-11-14',
        conservationStatus: 'Preocupación menor',
        habitat: 'Jardines',
        coordinates: [55.6761, 12.5683]
    },
    {
        id: 3,
        scientificName: 'Cyanistes caeruleus',
        commonName: 'Herrerillo común',
        observations: 856,
        lastSeen: '2024-11-13',
        conservationStatus: 'Preocupación menor',
        habitat: 'Bosques',
        coordinates: [55.6961, 12.5883]
    },
    {
        id: 4,
        scientificName: 'Fringilla coelebs',
        commonName: 'Pinzón vulgar',
        observations: 734,
        lastSeen: '2024-11-12',
        conservationStatus: 'Preocupación menor',
        habitat: 'Bosques mixtos',
        coordinates: [55.6561, 12.5583]
    },
    {
        id: 5,
        scientificName: 'Sturnus vulgaris',
        commonName: 'Estornino pinto',
        observations: 689,
        lastSeen: '2024-11-11',
        conservationStatus: 'Preocupación menor',
        habitat: 'Zonas urbanas',
        coordinates: [55.7061, 12.5983]
    }
];

// Clústeres de biodiversidad
export const mockClusters = [
    {
        id: 1,
        centerLat: 55.6761,
        centerLng: 12.5683,
        speciesCount: 87,
        area: 2.3,
        biodiversityScore: 0.89,
        dominantSpecies: ['Passer domesticus', 'Turdus merula'],
        habitatType: 'Parque urbano'
    },
    {
        id: 2,
        centerLat: 55.6861,
        centerLng: 12.5783,
        speciesCount: 92,
        area: 3.1,
        biodiversityScore: 0.94,
        dominantSpecies: ['Cyanistes caeruleus', 'Fringilla coelebs'],
        habitatType: 'Bosque mixto'
    },
    {
        id: 3,
        centerLat: 55.6661,
        centerLng: 12.5583,
        speciesCount: 78,
        area: 1.8,
        biodiversityScore: 0.82,
        dominantSpecies: ['Sturnus vulgaris', 'Passer domesticus'],
        habitatType: 'Zona residencial'
    },
    {
        id: 4,
        centerLat: 55.6961,
        centerLng: 12.5883,
        speciesCount: 105,
        area: 4.2,
        biodiversityScore: 0.97,
        dominantSpecies: ['Turdus merula', 'Cyanistes caeruleus'],
        habitatType: 'Área protegida'
    },
    {
        id: 5,
        centerLat: 55.6561,
        centerLng: 12.5483,
        speciesCount: 65,
        area: 1.5,
        biodiversityScore: 0.75,
        dominantSpecies: ['Passer domesticus', 'Sturnus vulgaris'],
        habitatType: 'Zona comercial'
    }
];

// Datos temporales (2020-2024)
export const mockTimelineData = [
    {year: 2020, species: 287, observations: 6234, accuracy: 0.74},
    {year: 2021, species: 298, observations: 6789, accuracy: 0.79},
    {year: 2022, species: 315, observations: 7345, accuracy: 0.83},
    {year: 2023, species: 328, observations: 7891, accuracy: 0.88},
    {year: 2024, species: 342, observations: 8547, accuracy: 0.92}
];

// Métricas AI del paper
export const aiMetrics = {
    detectionAccuracy: 93.81,
    speciesIdentification: 90.24,
    habitatPrediction: 87.6,
    clusteringPerformance: 96.2,
    realTimeProcessing: 'Sí',
    dataSource: 'GBIF + Teledetección + Ciencia Ciudadana'
};

// Estudios citados
export const researchStudies = [
    {
        authors: 'Guo et al. (2024)',
        method: 'Swin-Mask R-CNN',
        accuracy: '74% mAP',
        application: 'Detección de palomas en Hong Kong',
        location: 'Hong Kong'
    },
    {
        authors: 'Martins et al. (2021)',
        method: 'Multi-task CNN',
        accuracy: 'F1: 79.3%',
        application: 'Mapeo de especies de árboles',
        location: 'Río de Janeiro'
    },
    {
        authors: 'Zhang et al. (2023)',
        method: 'DenseNet_BC_34',
        accuracy: '93.81%',
        application: 'Clasificación de escenas acústicas',
        location: 'Guangzhou'
    },
    {
        authors: 'Wellmann et al. (2020)',
        method: 'Random Forest',
        accuracy: '59-90%',
        application: 'Modelado de hábitat para aves',
        location: 'Leipzig'
    }
];

// Capas del framework
export const frameworkLayers = [
    {
        layer: 'Tecnologías y Herramientas de IA',
        description: 'Deep Learning, Machine Learning, Visión por Computadora',
        color: 'bg-purple-500'
    },
    {
        layer: 'Gestión de Datos',
        description: 'Teledetección, Sensores Ambientales, Monitoreo Acústico, Ciencia Ciudadana',
        color: 'bg-blue-500'
    },
    {
        layer: 'Análisis y Modelado',
        description: 'Detección de especies, Idoneidad de hábitat, Evaluación ecosistémica, Análisis de riesgo',
        color: 'bg-green-500'
    },
    {
        layer: 'Implementación y Monitoreo',
        description: 'Monitoreo en tiempo real, Gestión adaptativa, Planificación de conservación',
        color: 'bg-yellow-500'
    },
    {
        layer: 'Resultados',
        description: 'Biodiversidad mejorada, Resiliencia ecosistémica, Desarrollo sostenible',
        color: 'bg-red-500'
    }
];
