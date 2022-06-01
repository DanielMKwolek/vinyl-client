import Vinyl from "./Vinyl";
import { useEffect, useState } from "react";

const VinylsView = () => {
    const [vinylData, setVinylData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/vinyls")
            .then(response => response.json())
            .then(data => setVinylData(data.vinyls))
            .catch(e => console.log(e))
    }, [])

    const vinyls = vinylData.map((value) => {
        return <Vinyl data={value} key={value._id}/>
    })

    return (
        <div>
            {vinyls}
        </div>
    )
}

export default VinylsView;