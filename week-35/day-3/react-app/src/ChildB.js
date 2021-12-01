import abc from './logo.svg'
import { useContext } from 'react'
import { UserContext } from './App'

function ChildB(props) {

    //using hook to get the value from the context

    const contextValue = useContext(UserContext)
    console.log(`🚀 ~ ChildB ~ abc`, contextValue)

    //change something in the context
    // contextValue.setUserName()
    return (
        <div className='childB'>
            <h2>This is child B</h2>
            {/* Render prop pattern */}
            {/* <UserContext.Consumer>
                {(value) => <h2>This is the user is the {value}</h2>}
            </UserContext.Consumer> */}

            <h2>This is the user is the {contextValue.userName}</h2>
            <h3>The user is logged in {`${contextValue.isLoggedIn}`}</h3>
            <img src={abc} className='logo-small'/>
        </div>
    )
}

export default ChildB
