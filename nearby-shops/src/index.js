import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import reducers from "./reducers/index";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

