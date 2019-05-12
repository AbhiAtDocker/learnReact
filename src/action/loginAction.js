import Axios from 'axios';

export function LoginUser(loginDetails){
  console.log(JSON.stringify({user_email:loginDetails.user_email,
                              user_password:loginDetails.user_password,
                              user_type:loginDetails.user_type
                            }))
  return function action(dispatch){
        const response = Axios.post('https://api.getsetgo.fitness/base_ind/API/v1/sign-in', JSON.stringify({user_email:loginDetails.user_email,
                                    user_password:loginDetails.user_password,
                                    user_type:loginDetails.user_type
                                  }),
         {
            headers: {
           'Content-Type': 'application/json'
         }

      });


        return response.then(resp=>{
           dispatch(fetchLoggedInData(resp.data))
           }).catch((err)=>{
            dispatch({type:"FETCH_USER_ERROR", payload:err})
          })
        }
}

export const fetchLoggedInData = (respData) => {
  return {
    type: "LOGGEDIN_USER",
    payload:respData
  }
};
