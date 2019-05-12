//import 'bable-polyfill';
import { applyMiddleware, createStore} from 'redux';
import allReducer  from '../reducer';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';


//export const store = createStore(allReducer);


export default function configureStore() {
  return createStore(
    allReducer,
    applyMiddleware(thunk)
  );
}


//  export default function configureStore(preloadedState) {
//   const middlewares = [loggerMW, thunk]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorMW]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(allReducer, preloadedState, composedEnhancers)

//   return store
// }


// store.dispatch((dispatch)=>{

//     dispatch({type:"FETCH_USER_START"})
//     dispatch({type:"FETCH_USER_LIST"})
//     // Axios.get('http://localhost:9010/User/users').
//     // then(resp=>{
//     //         dispatch({type: "FETCH_USER_LIST", payload:Response.data})
//     // }).catch(resp=>{
//     //     console.log(resp.error);
//     //     dispatch({
//     //         type:"FETCH_USER_ERROR", payload:resp.error
//     //     })

//     // } )
// })
