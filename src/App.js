import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./pages/Quiz";
import Salute from "./pages/Salute";
import Food from "./pages/Food";
import Shopping from "./pages/Shopping";
import Love from "./pages/Love";
import AskQuestions from "./pages/AskQuestions";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dictionary' element={<Dictionary/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/salute' element={<Salute/>}/>
                <Route path='/food' element={<Food/>}/>
                <Route path='/shopping' element={<Shopping/>}/>
                <Route path='/love' element={<Love/>}/>
                <Route path='/ask' element={<AskQuestions/>}/>
            </Routes>
        </>
    );
}

export default App;
