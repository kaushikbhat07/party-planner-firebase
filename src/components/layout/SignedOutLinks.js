import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<ul className="right">
			<li><a href="/signup">Sign up</a></li>
			<li><NavLink to='/signin'>Login</NavLink></li>
		</ul>
	)
}

export default SignedOutLinks;