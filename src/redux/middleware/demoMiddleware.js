import { isRSAA,RSAA } from "redux-api-middleware";

export const demoMiddleware = (store) => (next) => (action) => {
    // Our middleware
    console.log(action);
    console.log(isRSAA(action));
    // if (isRSAA(action)){
    //     action[RSAA].endpoint ="https://jsonplaceholder.typicode.com/users";
    // }
    next(action);
}

