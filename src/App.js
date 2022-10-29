import './App.scss';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import FormsPage from "./pages/FormsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/forms" element={<FormsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
