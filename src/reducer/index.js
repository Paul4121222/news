import { combineReducers } from 'redux';
import auth from './authReducer';
import newTheme from './newTheme';
import {reducer} from 'redux-form';


export default combineReducers({
    auth,
    newTheme,
    form:reducer
})