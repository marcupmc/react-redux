import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from '../containers/Home';

import store from '../store';


injectTapEventPlugin();


const App = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
        </Router>
    </Provider>
);

export default App;
