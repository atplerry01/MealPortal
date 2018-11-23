import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import App from './app/App';

import { history } from "./_helpers/history";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Router history={history}>
        <Route component={App} />
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
