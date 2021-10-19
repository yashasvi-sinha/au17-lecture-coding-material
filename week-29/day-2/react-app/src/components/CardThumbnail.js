
import ThumbnailInfo from "./ThumbnailInfo"

//functional component
function CardThumbnail() {


    //must return some html
    return (
        <div  className="card w-50 shadow-lg" >
            <img src="https://i.ytimg.com/vi/N6Bd7wJnorw/hq720.jpg" className="card-img-top " />
            <div className="card-body bg-dark text-light">
                <ThumbnailInfo />
                
            </div>
        </div>
    )
}


export default CardThumbnail
