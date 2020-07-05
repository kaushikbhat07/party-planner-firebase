import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDBqCwT6t01-gRnGROB13DhPwPD90Fj9z0",
	authDomain: "netninja-project-managem-6f13b.firebaseapp.com",
	databaseURL: "https://netninja-project-managem-6f13b.firebaseio.com",
	projectId: "netninja-project-managem-6f13b",
	storageBucket: "netninja-project-managem-6f13b.appspot.com",
	messagingSenderId: "240655991717",
	appId: "1:240655991717:web:2eb711cf5ef1bed91d5e4c",
	measurementId: "G-930HVRWY98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;