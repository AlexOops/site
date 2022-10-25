import './App.scss';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
