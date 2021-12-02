import abc from './logo.svg'


function ChildB(props) {

    

   
    return (
        <div className='childB'>
            <h2>This is child B</h2>
            <img src={abc} className='logo-small'/>
        </div>
    )
}

export default ChildB
