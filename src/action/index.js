import axios from '../axios';

export const SignIn=(id)=>{
    return {type:"SIGN_IN",payload:id};
}


export const SignOut=()=>{
    return {type:"SIGN_OUT"};
}


export const newsList=(id)=>async (dispatch)=>{
    const response=await axios.get('/top-headlines',{
        params:{
            category:id,
            country:'tw',
            apiKey:'c4274550357643439e8b393e91b57cb4'
        }
    });
    dispatch({type:'SPORTS',payload:response.data.articles});
}