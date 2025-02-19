import {IWord} from '../action/interface';
import history from "../history";

interface IHistoryState {
    info?: {
        searchKey?: string
    }
}

const searchWord = (state = "", action: IWord) => {
    const historyState = history.location.state as IHistoryState
    const initState =  historyState?.info?.searchKey || state;
    switch (action.type) {
        case "SEARCH_WORD":
        return action.payload;
        default:
        return initState;
    }
};

export default searchWord;