import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./pages/Quiz";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dictionary' element={<Dictionary/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
            </Routes>
        </>
    );
}

export default App;
