import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Information from "../components/information/Information";
import Payment from "../components/payment/Payment";

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <Header/>
            <Information/>
            <Payment/>
        </div>
    );
};

export default HomePage;