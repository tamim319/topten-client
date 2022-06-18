import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Header from '../../Shared/Header/Header';
import Companies from '../Companies/Companies';

const Home = () => {
    return (
        <div>
         <Header />
         <Banner />
         <Companies />
        </div>
    );
};

export default Home;