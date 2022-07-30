import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <section className="loginSection">
                <form className="loginForm">
                <fieldset className="fieldset">
                <legend>Login</legend>
                <ul>
                    <li>
                    <label for="username">Username:</label>
                    <input type="text" id="username" required/>
                    </li>
                    <li>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required/>
                    </li>
                </ul>
                </fieldset>
                <button>Submit</button>
                <button type="button">Create Account</button>
            </form>
          </section>
        );
    }
}
 
export default LoginPage;
