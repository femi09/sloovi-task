import {combineReducers} from 'redux'
import authReducer from './auth';
import taskReducer from './tasks';


const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
})
export default rootReducer