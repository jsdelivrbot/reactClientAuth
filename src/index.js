import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Feature from './components/feature'


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
            <Route path="/" component={App}></Route>
            <Route path="/signin" component={Signin} />
            <Route path="/feature" component={Feature} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
