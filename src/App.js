import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import UpdateProject from './components/projects/UpdateProject'

function App() {
	if (window.screen.width > 600) {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<Navbar />
						<Switch>
							<Route exact path='/' component={Dashboard} />
							<Route path='/project/:id' component={ProjectDetails} />
							<Route path='/update/:id' component={UpdateProject} />							
							<Route path='/signin' component={SignIn} />
							<Route path='/signup' component={SignUp} />
							<Route path='/create' component={CreateProject} />
							<Redirect to='/' />
						</Switch>
					</header>
				</div>
			</BrowserRouter>
		);
	} else {
		return (
			<div className="container center">
				This app is not mobile optimized. Please open with a larger screen device.
			</div>
		);
	}

}

export default App;
