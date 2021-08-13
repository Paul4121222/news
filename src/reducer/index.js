import { combineReducers } from 'redux';
import auth from './authReducer';
import newTheme from './newTheme';
export default combineReducers({
    auth,
    newTheme
})