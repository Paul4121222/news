import { combineReducers } from 'redux';
import auth from './authReducer';
import newTheme from './newTheme';
import {reducer} from 'redux-form';


const searchWord=(state='',action)=>{
    if(action.type==="SEARCH_WORD"){
        return action.payload;
    }
    else
        return state;
}

export default combineReducers({
    auth,
    newTheme,
    form:reducer,
    searchWord
})