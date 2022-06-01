import './App.css';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import VinylsView from './Components/VinylsView';

function App() {
  const [artistName, setArtistName] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [vinylData, setVinylData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/vinyls")
      .then(response => response.json())
      .then(data => setVinylData(data.vinyls))
      .catch(e => console.log(e))
  }, [])

  const artistHandleOnChange = (event) => {
    setArtistName(event.target.value)
  }

  const albumHandleOnChange = (event) => {
    setAlbumName(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    fetch("http://127.0.0.1:3000/vinyls/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        artistName: artistName,
        albumName: albumName
      })
    })
      .then(() => fetch("http://127.0.0.1:3000/vinyls"))
      .then(response => response.json())
      .then(data => setVinylData(data.vinyls))
      .catch(e => console.log(e))
  }
  
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="artistname" value={artistName} onChange={artistHandleOnChange}/>
        <input type="text" placeholder="albumname" value={albumName} onChange={albumHandleOnChange}/>
        <input type="submit" value="submit"/>
      </form>
      <main>
        <Routes>
          <Route path="/" element={<VinylsView vinylData={vinylData}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;