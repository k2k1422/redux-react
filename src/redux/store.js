import thunk from "redux-thunk";
import { demoMiddleware } from "./middleware/demoMiddleware";
import rootReducer from "./reducers";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/es/storage";
import { apiMiddleware } from "redux-api-middleware";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";


export default (history) => {
    const persistFilter = createFilter(
        "auth", ["access", "refresh"]
    )

    const reducer = persistReducer(
        {
            key: "ficosa",
            storage: storage,
            whitelist: ["auth"],
            transforms: [persistFilter]
        },
        rootReducer(history)
    )
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
    persistStore(store)
    return store
}