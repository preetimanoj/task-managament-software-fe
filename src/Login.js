import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();
    navigate('/user');
    console.log("logged in");
}
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        loginStatus: false,
        email: "",
        password: "",
    }

    loginNow() {
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/v1/users/loginUser',
            data: {
                email: this.state.email,
                password: this.state.password
            },
        };

        // send the request
        axios(options)
            .then(res => {
                this.setState({ loginStatus: true });
                console.log("Login Successful")
            })
            .catch((reason) => {
                if (reason.response.status === 400) {
                    // Handle 400
                } else {
                    // Handle else
                }
                console.log(reason.message)
            })
    }

    handleEmailChange(param) {
        this.setState({ email: param.target.value });
        console.log(param.target.value)
    }

    handlePasswordChange(param) {
        this.setState({ password: param.target.value });
    }

    render() {
        return (
            <section className="loginSection">
                <form className="loginForm">
                    <fieldset className="fieldset">
                        <legend>Login</legend>
                        <ul>
                            <li>
                                <label for="username">Username:</label>
                                <input type="text" id="username" required onChange={this.handleEmailChange} />
                            </li>
                            <li>
                                <label for="password">Password:</label>
                                <input type="password" id="password" required onChange={this.handlePasswordChange} />
                            </li>
                        </ul>
                    </fieldset>
                    <button onClick={this.loginNow()}>Submit</button>
                    <button >Create Account</button>
                </form>
            </section>
        );
    }
}

export default LoginPage;
