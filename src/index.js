import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import './index.css';
import App from './App';
import reducers from './reducer'
import registerServiceWorker from './registerServiceWorker';

const boundCompose = compose.bind(null, applyMiddleware(thunk));
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? boundCompose(window.__REDUX_DEVTOOLS_EXTENSION__())
    : boundCompose()
);

ReactDOM.render(
<Router>
<Provider store={store}>
<App />
</Provider>
</Router>
, document.getElementById('root'));
registerServiceWorker();