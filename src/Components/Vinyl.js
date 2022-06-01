import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Vinyl = (props) => {
    const [artistName, setArtistName] = useState("")
    const [albumName, setAlbumName] = useState("")
    const [vinylInfo, setVinylInfo] = useState({})

    let navigate = useNavigate()

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

      const handleDelete=() => {
        fetch(`http://127.0.0.1:3000/vinyls/${params.id}`, {
            method: "DELETE",
            })
            .then(() => {
                
                navigate("/", {replace: true})
            })
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
            <p>Artist Name: {vinylInfo.vinyl?vinylInfo.vinyl.artistName:"loading"}</p>
            <p>Album Name: {vinylInfo.vinyl?vinylInfo.vinyl.albumName:"loading"}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Vinyl;