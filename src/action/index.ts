import axios from "../axios";
import history from "../history";
//泛型介面
import { Dispatch } from "redux";
import {ICleanNewsList, IGetNewsList, ISearchKey, IGetMainPage, IWord} from './interface';

let token:string = "9c0f06ecc81ccbb80f495f8bec001558";

export const cleanNewsList = (): ICleanNewsList => {
  return {
    type: "CLEAN",
  };
};

export const getNewsList = (keyWord:string) => async (dispatch: Dispatch<IGetNewsList>) => {
  try {
    const response = await axios.get("/search", {
      params: {
        q: keyWord,
        country: "tw",
        token,
      },
    });
    dispatch({ type: "CATEGORY", payload: response.data.articles });
  } catch(e) {
    console.log(e)
  }

};

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

export const searchKey = (keyWord: string) => async (dispatch: Dispatch<ISearchKey | ICleanNewsList>) => {
  dispatch({ type: "CLEAN" });
  try {
    const response = await axios.get("/search", {
      params: {
        token,
        country: "tw",
        q: keyWord,
      },
    });
  
    dispatch({ type: "SEARCH", payload: response.data.articles });
    history.push({
      pathname: "/search",
      state: {
        info: {
          searchKey: keyWord,
        },
      },
    });
  } catch(e) {
    console.log(e)
  }
};

export const getMainPage = () => async (dispatch: Dispatch<IGetMainPage>) => {
  const response = await axios.get("/top-headlines", {
    params: {
      country: "tw",
      token,
    },
  });

  dispatch({ type: "MAIN", payload: response.data.articles });
};

export const word = (word: string): IWord => {
  return { type: "SEARCH_WORD", payload: word };
};
