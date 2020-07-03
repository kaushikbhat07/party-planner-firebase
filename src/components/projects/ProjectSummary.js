import React from 'react';

const ProjectSummary = ({project}) => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<h4 className="">
					{project.title}
				</h4>
				<p>Posted by the Net Ninja</p>
				<p className="grey-text">3rd September, 2 AM</p>
			</div>
		</div>
	);
}

export default ProjectSummary;