const initialState = {
  userLoggedIn: false,
  token:'',
  userProfile:{}
}

export default function(state = initialState, action) {
    switch(action.type){
        case "USER_LOGGEDIN":{
            console.log("reducer... " + action.payload.token);
            return {...state, token:action.payload.token, userLoggedIn:true};
          }
         default:
          return {...state};
    }
}
