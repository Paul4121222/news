//action 需符合Redux action的基本結構
//必須有type
import { Action } from "redux";

export interface ICleanNewsList extends Action {
    type: 'CLEAN'
}

export interface IGetNewsList extends Action {
    type: "CATEGORY",
    payload: Record<string, any>[]
}

export interface ISearchKey extends Action {
    type: 'SEARCH',
    payload: Record<string, any>[]
}

export interface IGetMainPage extends Action {
    type: "MAIN",
    payload: Record<string, any>[]
}

export interface IWord extends Action {
    type: 'SEARCH_WORD',
    payload: string
}