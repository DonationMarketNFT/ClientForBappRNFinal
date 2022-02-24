export default (state,action) => {
    switch(action.type){
        case "CHANGE_LOGIN_STATE":
            return{
                isLogin: action.payload
            }
        default:
            return state;
    }
}