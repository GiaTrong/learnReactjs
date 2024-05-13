import {combineReducers} from 'redux'
import counterReducer from './counter'

const allReducer = combineReducers({
    counterReducer,
})

export default allReducer;