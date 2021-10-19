import { Component } from "react";

//class based component
class ThumbnailInfo extends Component {

    constructor() {
        super()
    }


    render() {
        return (
            <div className="row gx-3">
                <div className="col-2">
                    <img className="img-fluid rounded-circle" src="https://yt3.ggpht.com/ytc/AKedOLRK7traifpSPOPE1Ow3vJBuqnaz8mFwycxQl3Qv=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="col-10">
                    <h6>Best Songs Of Coldplay Full Album 2021</h6>
                    <div className="text-muted">
                        <h6>Time Music</h6>
                        <h6>446k views • 1 month ago</h6>
                    </div>
                </div>
            </div>
        )
    }

}


export default ThumbnailInfo
