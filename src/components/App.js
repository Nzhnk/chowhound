import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login.js';
import Home from './Home.js';
import Register from './Register.js';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/' exact component={ Login }></Route>
				<Route path='/home' component={ Home }></Route>
				<Route path='/register' component={ Register }></Route>
				<Redirect to="/"></Redirect>
			</Switch>
		);
	}
}

export default App;