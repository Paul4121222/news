import axios from '../axios';
import history from '../history';

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
            token:'b89f929d24f4fe3d0585a6bfb8cc1c74'
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

export const searchKey=(keyWord)=>async (dispatch)=>{
    const response=await axios.get('/search',{
        params:{
            token:'b89f929d24f4fe3d0585a6bfb8cc1c74',
            country:'tw',
            q:keyWord
        }
    });
    dispatch({type:"SEARCH",payload:response.data.articles});
    history.push('/search');
}

export const mainPage=()=>async (dispatch)=>{
    const response=await axios.get('/top-headlines',{
        params:{
            country:'tw',
            token:'b89f929d24f4fe3d0585a6bfb8cc1c74'
        }
    });

    dispatch({type:'MAIN',payload:response.data.articles});
}