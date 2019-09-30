import { combineReducers } from "redux";
import fetch_robots from './fetch_robots';
import { connectRouter } from "connected-react-router"

export default (history) => combineReducers({
    router: connectRouter(history),
    fetch_robots: fetch_robots
});