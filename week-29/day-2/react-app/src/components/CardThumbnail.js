
import ThumbnailInfo from "./ThumbnailInfo"

//functional component
function CardThumbnail(props) {
    console.log(props)

    
    
    //must return some html
    return (
        <div  className="card w-50 shadow-lg" >
            <img src={props.videoInfo.imageUrl} className="card-img-top " />
            <div className="card-body bg-dark text-light">
                <ThumbnailInfo  videoMetadata={props.videoInfo}/>        
            </div>
        </div>
    )
}


export default CardThumbnail
