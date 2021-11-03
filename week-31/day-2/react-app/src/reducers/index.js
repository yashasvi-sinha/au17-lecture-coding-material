import modifyCounter from './counter'

import { combineReducers } from 'redux'

const allReducers = combineReducers(
    {
        // modifyCounter: modifyCounter
        modifyCounter
    }
)

export default allReducers