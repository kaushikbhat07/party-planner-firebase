export const createProject = (project) => {
	return (dispatch, getstate) => {
		// aysnc
		dispatch({
			type: 'CREATE_PROJECT',
			project
		}); // project: project
	}
}