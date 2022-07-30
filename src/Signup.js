import React, { Component } from 'react';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <section className="loginSection">
                <form className="loginForm">
                <fieldset className="fieldset">
                <legend>Sign Up!</legend>
                <ul>
                    <li>
                    <label for="username">Username:</label>
                    <input type="text" id="username" required/>
                    </li>
                    <li>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required/>
                    </li>
                    <li>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required/>
                    </li>
                </ul>
                </fieldset>
                <button>Submit</button>
                <button type="button">Have an Account?</button>
            </form>
          </section>
        );
    }
}
 
export default SignUpPage;
