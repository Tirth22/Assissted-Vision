import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// Importing the required components
import Board from './containers/Board';
import Quiz from './containers/Quiz';
import Header from "./components/Header";
import Landing from "./containers/Landing";
import ObjectDetection from "./containers/ObjectDetection";
//import Ocr from "./containers/Ocr";


// Importing the CSS File
import "./App.css";

function App() {

    return (
        <div className="App">
            <Router>
                <Header/> 
                <Routes>
                    <Route path="/detection" element={<ObjectDetection/>} />
                    <Route path="/board" element={<Board />}/>
                    <Route path="/quiz" element={<Quiz />}/>
                    {/* <Route path="/ocr" element={<Ocr />}/> */}
                    <Route path="/" element={<Landing />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;