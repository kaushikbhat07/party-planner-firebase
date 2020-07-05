const initialState = {
    authError: null,
    signOutError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            console.log(action.err);
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return {
                ...state,
                signOutError: null
            }            
        case 'SIGNOUT_ERROR': 
            console.log('Signout error');
            return {
                ...state,
                signOutError: 'Signout Failed'
            }
         case 'SIGNUP_SUCCESS': 
            console.log('Signup success');
            return {
                ...state,
                authError: null
			}
		case 'SIGNUP_ERROR': 
            console.log('Signup failed');
            return {
                ...state,
                authError: action.err.message
            }  			
        default: 
            return state;       
    }
}

export default authReducer;