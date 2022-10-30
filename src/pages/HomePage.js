import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Information from "../components/information/Information";
import Payment from "../components/payment/Payment";
import Contacts from "../components/contacts/Contacts";
import Questions from "../components/questions/Questions";
import Feedback from "../components/feedback/Feedback";

const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <Information/>
            <Payment/>
            <Contacts/>
            <Questions/>
            <Feedback/>
        </div>
    );
};

export default HomePage;