import './App.scss';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import FormsPage from "./pages/FormsPage";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Footer from "./components/footer/Footer";
import ProtocolsPage from "./pages/ProtocolsPage";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/forms" element={<FormsPage/>}/>
                <Route path="/protocols" element={<ProtocolsPage/>}/>
            </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
