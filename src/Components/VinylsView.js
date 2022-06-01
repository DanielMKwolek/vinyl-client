import Vinyl from "./Vinyl";

const VinylsView = (props) => {

    const vinyls = props.vinylData.map((value) => {
        return <Vinyl data={value} key={value._id}/>
    })

    return (
        <div>
            {vinyls}
        </div>
    )
}

export default VinylsView;