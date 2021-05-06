const showReducer = (state = false, action) => {
    switch(action.type){
        case "isShow" : return !state
        default: return state;
    }
}

export default showReducer