import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Hero/HeroSection';
import InteractiveMap from './components/Map/InteractiveMap';
import MetricsGrid from './components/Dashboard/MetricsGrid';
import SpeciesTable from './components/Dashboard/SpeciesTable';
import TimelineChart from './components/Dashboard/TimelineChart';
import ClusterAnalysis from './components/Dashboard/ClusterAnalysis';
import AboutSection from './components/Sections/AboutSection';
import MethodologySection from './components/Sections/MethodologySection';
import ResultsSection from './components/Sections/ResultsSection';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home'); // home, species, dashboard, etc.

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header con menú */}
            <Header setCurrentScreen={setCurrentScreen}/>

            <main className="pt-20">
                {currentScreen === 'home' && (
                    <>
                        <section id="hero">
                            <HeroSection/>
                        </section>

                        <section id="dashboard" className="py-16 bg-white">
                            <div className="max-w-7xl mx-auto px-4">
                                <InteractiveMap/>
                                <MetricsGrid/>
                                <AboutSection/>
                            </div>
                        </section>
                    </>
                )}

                {currentScreen === 'species' && <SpeciesTable/>}

                {currentScreen === 'timeline' && <TimelineChart/>}

                {currentScreen === 'cluster' && <ClusterAnalysis/>}

                {currentScreen === 'methodology' && <MethodologySection/>}

                {currentScreen === 'results' && <ResultsSection/>}
            </main>

            <Footer/>
        </div>
    );
}

export default App;
