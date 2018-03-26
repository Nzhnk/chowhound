import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import 'antd/dist/antd.css';
import './styles/App.css';

import App from './components/App';

import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Reducer from './store/reducer.js'

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
