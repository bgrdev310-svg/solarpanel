import React from 'react';
import HeroBento from '../components/HeroBento';
import FeatureCards from '../components/FeatureCards';
import HomeServices from '../components/HomeServices';
import TheProcess from '../components/TheProcess';
import RoofEngineering from '../components/RoofEngineering';
import SmartMonitoring from '../components/SmartMonitoring';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import GridIndependence from '../components/GridIndependence';

const Home = () => {
    return (
        <>
            <HeroBento />
            <FeatureCards />
            <HomeServices />
            <TheProcess />
            <RoofEngineering />
            <SmartMonitoring />
            <FAQ />
            <Testimonials />
            <GridIndependence />
        </>
    );
};

export default Home;
