import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, legacy_createStore as createStore  } from "redux";

import  Reducers  from './reducers/index'
const store= createStore(Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

