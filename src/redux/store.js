import thunk from "redux-thunk";
import { demoMiddleware } from "./middleware/demoMiddleware";
import rootReducer from "./reducers";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiMiddleware } from "redux-api-middleware";
import { routerMiddleware } from "connected-react-router";


export default (history) => {

    const reducer = rootReducer(history)
   

    const store = createStore(
        reducer, {},
        composeWithDevTools(
            applyMiddleware(
                demoMiddleware,
                apiMiddleware,
                thunk,
                routerMiddleware(history)
            )
        )
    )
    return store
}