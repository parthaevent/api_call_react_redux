import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router';

import AppComponent from "./components/App.js";
import store from "./store";

ReactDOM.render(
<Provider store={store}>
<Router history={browserHistory}>
<Route path='/' component={AppComponent} />
</Router>
</Provider>, document.getElementById('app'));
