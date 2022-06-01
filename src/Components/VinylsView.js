import {Link} from "react-router-dom"

const VinylsView = (props) => {

    const vinyls = props.vinylData.map((value) => {
       return(<li key={value._id}><Link to={`/${value._id}`}>{value.artistName}, {value.albumName}</Link> </li>)
    })

    return (
        <div>
            <ul>
                {vinyls}
            </ul>
        </div>
    )
}

export default VinylsView;