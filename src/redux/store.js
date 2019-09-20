import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { demoMiddleware } from "./middleware/demoMiddleware";


export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            demoMiddleware,
            thunk
        )
    )
);