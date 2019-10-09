import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ForecastProfile from "./components/ForecastProfile1";
import DataSHeet from './components/DataSheet';
import TableComponent from './components/TableComponent';
import StickyHeadTable from './components/StickyHeadTable';

import createHistory from "history/createBrowserHistory"
import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"

import configureStore from "./redux/store"

import { Route, Switch } from "react-router"

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/forecastProfile" component={ForecastProfile} />
                <Route exact path="/dataSheet" component={DataSHeet} />
                <Route exact path="/tableComponent" component={TableComponent} />
                <Route exact path="/stickyHeadTable" component={StickyHeadTable} />
            </Switch>
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
