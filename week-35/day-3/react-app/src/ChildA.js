import ChildB from "./ChildB"


function ChildA(props) {
    
    return (
        <div className='childA'>
            <h2>This is child A</h2>
            <ChildB />
        </div>
    )
}

export default ChildA
