import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


function Login(){
    let navigate = useNavigate();
    navigate('/user');
    console.log("logged in");
}
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    
    
    state = {  }
    render() { 
        return (  
            <section className="loginSection">
                <form className="loginForm" onSubmit={() => { Login();}}>
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
