import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Vinyl = (props) => {
    const [vinylInfo, setVinylInfo] = useState({})

    const params = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/vinyls/${params.id}`) 
    .then(response => response.json())
    .then(info => setVinylInfo(info))
    .catch(e => console.log(e))},[])

    return (
        <div>
            <p>Artist Name: {vinylInfo.vinyls?vinylInfo.vinyls.artistName:"loading"}</p>
            <p>Album Name: {vinylInfo.vinyls?vinylInfo.vinyls.albumName:"loading"}</p>
        </div>
    )
}

export default Vinyl;