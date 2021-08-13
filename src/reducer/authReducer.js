const auth={isSigned:null,userID:null}

export default (state=auth,action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return {...state,isSigned:true,userID:action.payload};
        case 'SIGN_OUT':
            return {...state,isSigned:false,userID:null};
        default:
            return state;

    }
}