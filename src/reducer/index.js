import {combineReducers} from 'redux';
import  LoggedInUser from './login';

const allReducers = combineReducers({
    loggedInUser: LoggedInUser
})

export default allReducers;
