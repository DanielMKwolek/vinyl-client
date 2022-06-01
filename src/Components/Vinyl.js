import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Vinyl = (props) => {
    const [artistName, setArtistName] = useState("")
    const [albumName, setAlbumName] = useState("")
    const [vinylInfo, setVinylInfo] = useState({})

    const params = useParams();

    const artistHandleOnChange = (event) => {
        setArtistName(event.target.value)
      }
    
      const albumHandleOnChange = (event) => {
        setAlbumName(event.target.value)
      }
    
      const handleOnSubmit = (event) => {
        event.preventDefault()
    
        fetch(`http://127.0.0.1:3000/vinyls/${params.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            artistName: artistName,
            albumName: albumName
          })
        })
          .then(() => fetch(`http://127.0.0.1:3000/vinyls/${params.id}`))
          .then(response => response.json())
          .then(info => setVinylInfo(info))
          .catch(e => console.log(e))
      }

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/vinyls/${params.id}`) 
    .then(response => response.json())
    .then(info => setVinylInfo(info))
    .catch(e => console.log(e))},[])

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="artistname" value={artistName} onChange={artistHandleOnChange}/>
                <input type="text" placeholder="albumname" value={albumName} onChange={albumHandleOnChange}/>
                <input type="submit" value="update"/>
            </form>
            <p>Artist Name: {vinylInfo.vinyls?vinylInfo.vinyls.artistName:"loading"}</p>
            <p>Album Name: {vinylInfo.vinyls?vinylInfo.vinyls.albumName:"loading"}</p>
        </div>
    )
}

export default Vinyl;