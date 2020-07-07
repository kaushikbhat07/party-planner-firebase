export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' })
			})
			.catch((err) => {
				dispatch({ type: 'LOGIN_ERROR', err })
			})
	}
}

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNOUT_ERROR', err: err })
			})
	}
}

export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		)
		.then(() => {
			var user = firebase.auth().currentUser;
			user.updateProfile({
				displayName: newUser.firstName + " " + newUser.lastName
			})
			.then(() => {
				return firestore.collection('users').doc(firebase.auth().currentUser.uid).set({
					firstName: newUser.firstName,
					lastName: newUser.lastName,
					initials: newUser.firstName[0] + newUser.lastName[0]
				})
				.catch(err => {
					console.log("doc write error " + err)
				})
			})
		})
		.then(() => {
			console.log("Signup success");
			dispatch({
				type: 'SIGNUP_SUCCESS'
			})
		})	
		.catch(err => {
			dispatch({
				type: 'SIGNUP_ERROR',
				err
			})
		})
	}
}