import axios from 'axios';

const ROOT_URL = 'http://localhost:9000';

export function signinUser ({ email, password }){
    // for redux-thunk: we return a function instead of an object, that takes as parameter a dispatch
    return function(dispatch){
        
        // Submit emai/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password });
    
        // if request is good ....
        // - update state to the indicate user is authenticated
        // - save the JWT token
        // - redirect o the route '/feature'
    
    
        // If request is bad ...
        // - Show an error to the user

    }    

}