import './App.css';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import VinylsView from './Components/VinylsView';
import Vinyl from "./Components/Vinyl";

function App() {
  
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/:id" element={<Vinyl />} />
          <Route path="/" element={<VinylsView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;