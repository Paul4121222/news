import axios from '../axios';

export const SignIn=(id)=>{
    return {type:"SIGN_IN",payload:id};
}


export const SignOut=()=>{
    return {type:"SIGN_OUT"};
}


export const newsList=(id)=>async (dispatch)=>{
    const response=await axios.get('/search',{
        params:{
            q:id,
            country:'tw',
            token:'c4274550357643439e8b393e91b57cb4'
        }
    });
    dispatch({type:'SPORTS',payload:response.data.articles});
}

//正確的id:b89f929d24f4fe3d0585a6bfb8cc1c74

//new:c4274550357643439e8b393e91b57cb4
/*export const newsList=(id)=>async (dispatch)=>{
    const response=await axios.get('/top-headlines',{
        params:{
            category:id,
            country:'tw',
            apiKey:'b89f929d24f4fe3d0585a6bfb8cc1c74'
        }
    });
    dispatch({type:'SPORTS',payload:response.data.articles});
}*/