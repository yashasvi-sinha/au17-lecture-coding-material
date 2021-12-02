import { Route, Routes } from "react-router"
import ChildB from "./ChildB"


function ChildA(props) {
    
    return (
        <div className='childA'>
            <h2>This is child A</h2>
            <Routes>
                <Route path="/childb"  element={<ChildB />} />
            </Routes>
        </div>
    )
}

export default ChildA
