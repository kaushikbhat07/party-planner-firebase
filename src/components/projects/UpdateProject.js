import React, { Component } from 'react'
import { updateProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import $ from 'jquery'

class UpdateProject extends Component {
	state = {
		title: '',
		content: '',
		updated: false
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		const { id } = this.props;
		e.preventDefault();
		$('#updatebtn').addClass('disabled');
		this.props.updateProject(this.state, id);
		// this.props.history.push('/');
		this.setState({
			updated: !this.state.updated
		})		
	}
	render() {
		const { auth, project } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		if (this.state.updated) return <Redirect to='/' />
		if (project === null) return <Redirect to='/' />
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Update Post - {project.title}</h5>
					<div className="input-field">
						<label htmlFor="title">Post Title</label>
						<input type="text" id="title" onChange={this.handleChange} required />
					</div>
					<div className="input-field">
						<label htmlFor="content">Post Content</label>
						<textarea className="materialize-textarea" id="content" cols="30" rows="10" onChange={this.handleChange} required></textarea>
					</div>
					<div className="input-field">
						<button id="updatebtn" className="btn pink lighten-1 z-depth-0">
							Update
						</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		id: id,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateProject: (project, id) => dispatch(updateProject(project, id))
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect(props => [
	{ collection: 'projects', doc: props.match.params.id }
]))(UpdateProject);