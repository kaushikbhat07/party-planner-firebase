import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Navbar/>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route path='/project/:id' component={ProjectDetails} />
					</Switch>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
