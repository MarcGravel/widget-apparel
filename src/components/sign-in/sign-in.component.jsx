import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import SiteButton from '../site-button/site-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

//using class due to using state to store data
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    //triggers the submission to DB at button click
    //also clears input fields when triggered. 
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    //sets state to current form values in real time. 
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in below</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />
                    <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />
                    <SiteButton type='submit'>Sign in</SiteButton>
                    <SiteButton onClick={signInWithGoogle}>Sign in with Google</SiteButton>
                </form>
            </div>
        )
    }
}

export default SignIn;