import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';

// Components
import App from './App';
import Dashboard from './components/Dashboard';

//Stores
import AuthStore from './stores/AuthStore';
import ConfigStore from './stores/ConfigStore';

// Rotas
const Navigator = new RouterStore();

// Sync history with web store
const history = syncHistoryWithStore(hashHistory, Navigator);

// Stores
const stores = {
    Navigator,
    ConfigStore,
    AuthStore,
}

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard} />
            </Route>

            <Route path='*' component={Dashboard} />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);