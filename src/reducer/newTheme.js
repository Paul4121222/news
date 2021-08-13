export default (state=[],action)=>{
    switch(action.type){
        case "SPORTS":
            return action.payload;
        default:
            return state;
    }
}