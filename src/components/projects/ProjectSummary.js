import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import $ from 'jquery';
import { deleteProject } from '../../store/actions/projectActions';

class ProjectSummary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			disabled: true
		}
	}

	handleDeleteClick = (e) => {
		e.target.className += ' disabled';
		const { project } = this.props;
		console.log("Clicked " + project.id);
		this.props.deleteProject(project.id);
	}

	render() {
		const { project, auth } = this.props;

		const canEdit = () => {
			if(auth.uid == project.authorId) {
				return (
					<button class="btn-floating btn-large waves-effect waves-light green"><i class="fa fa-pencil"></i></button>
				);
			}
		}

		const canDelete = () => {
			if(auth.uid == project.authorId) { 
				return (
					<button class="btn-floating btn-large waves-effect waves-light red"><i class="fa fa-trash" onClick={this.handleDeleteClick}></i></button>
				);
			}
		}
		return (
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<Link to={'/project/' + project.id}>
						<h4 className="">
							{project.title}
						</h4>
					</Link>
					<p>Posted by {project.authorFirstName} {project.authorLastName}</p>
					<p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
				</div>
				<div class="card-action">
					<div className="row center-align">
						<div className="col s6">
							{canEdit()}
						</div>
						<div className="col s6">
							{canDelete()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (projectId) => dispatch(deleteProject(projectId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);