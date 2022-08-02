import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();

function loginNow() {
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

            if (res.data.role == "admin") {
                navigate('/admin');
            } else {
                navigate('/user');
            }
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



function LoginPage() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleEmailChange(param) {
        this.setState({ email: param.target.value });
        console.log(param.target.value)
    }

    function handlePasswordChange(param) {
        this.setState({ password: param.target.value });
    }


    return (
        <section className="loginSection" >
            <form className="loginForm">
                <fieldset className="fieldset">
                    <legend>Login</legend>
                    <ul>
                        <li>
                            <label for="username">Username:</label>
                            <input type="text" id="username" required onChange={handleEmailChange} />
                        </li>
                        <li>
                            <label for="password">Password:</label>
                            <input type="password" id="password" required onChange={handlePasswordChange} />
                        </li>
                    </ul>
                </fieldset>
                <button onClick={loginNow()}>Login</button>
                <button >Create Account</button>
            </form>
        </section>
    );
}

export default LoginPage;
