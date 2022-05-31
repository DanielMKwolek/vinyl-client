const Vinyl = (props) => {
    return (
        <div>
            <p>Artist Name: {props.data.artistName}</p>
            <p>Album Name: {props.data.albumName}</p>
        </div>
    )
}

export default Vinyl;