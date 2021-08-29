import { combineReducers } from 'redux';
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
    newTheme,
    form:reducer,
    searchWord
})