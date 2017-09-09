import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:9000';

export function signinUser ({ email, password }){
    // for redux-thunk: we return a function instead of an object, that takes as parameter a dispatch
    return function(dispatch){
        
        // Submit emai/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // if request is good ....
                // - update state to the indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - save the JWT token
                localStorage.setItem('token', response.data.token);
                // - redirect o the route '/feature'
                this.props.history.push('/feature');
                console.log('redirecting to feature page');
            
            })
            .catch(() => {
                // If request is bad ...
                // - Show an error to the user
                dispatch(authError('Login details not correct'));
                console.log('redirecting to feature page ERROR');
            });
    
    }    

}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
  }
  