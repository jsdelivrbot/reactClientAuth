import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'

const ROOT_URL = 'http://localhost:9000';

export function signinUser ({ email, password }){
    // for redux-thunk: we return a function instead of an object, that takes as parameter a dispatch
    return function(dispatch){
        
        // Submit emai/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // if request is good ....

                // - save the JWT token
                localStorage.setItem('token', response.data.token);

                // - update state to the indicate user is authenticated
                dispatch({ type: AUTH_USER });

            
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

export function signoutUser() {
    localStorage.removeItem('token')
    return {
        type: UNAUTH_USER
    }
}
  
export function signupUser({email, password, passwordConfirmation}) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, {email, password, passwordConfirmation})
        .then(response => {
            dispatch({type: AUTH_USER})
            localStorage.setItem('token', response.data.token)
        })
        .catch(({response}) => {
            dispatch(authError(response.data.error))
        })
    }
}

export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: {authorization: localStorage.getItem('token')}
        })
        .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        })
    }
}