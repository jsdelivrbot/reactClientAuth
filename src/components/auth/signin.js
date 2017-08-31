import React,  { Component } from  'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

    handleFormSubmit({email, password}){
        console.log(email, password);
    }

    render() {

        const { handleSubmit, fields: {email, password}} = this.props;

        return  (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" type="email" placeholder="Email" {...email} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>password:</label>
                    <Field name="password" component="input" type="password" placeholder="password" {...password} className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);