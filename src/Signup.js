
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./loginstyles.css";

export default function LoginPage() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [uname, setEmail] = useState("Email");
    const [pass, setPassword] = useState("");
    const [name, setName] = useState("Name");
    const [role, setRole] = useState("user");

    let navigate = useNavigate();

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        console.log("uname " + uname + " pass " + pass + " name " + name);
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/v1/users/createUser',
            data: {
                email: uname,
                password: pass,
                name: name,
                role: role
            },
        };

        // send the request
        axios(options)
            .then(res => {
                console.log("Login Successful")
                console.log(res.data.role)
                setIsSubmitted(true);
                if (res.data.role == "admin") {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            }).catch(res => {
                console.log(res)
            })
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    function emailChange(event) {
        setEmail(event.target.value);
    }

    function passChange(event) {
        setPassword(event.target.value);
    }

    function rolechange() {
        if (role == "user")
            setRole("admin")
        else
            setRole("user");
    }

    function nameChange(event) {
        setName(event.target.value);
    }


    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>
                    <input type="text" name="name" required onChange={nameChange} />
                    {renderErrorMessage("name")}
                </div>

                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="uname" required onChange={emailChange} />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required onChange={passChange} />
                    {renderErrorMessage("pass")}
                </div>
                <div className="input-container">
                    <input type="radio" id="vehicle3" name="vehicle3" onChange={rolechange} />
                    <label for="vehicle3"> I am just a(an) {role} !</label>
                </div>

                <div className="button-container">
                    <input type="submit" />
                </div>
                <div className="button-container">
                    <Link to="/">
                        <button>Already registered?</button>
                    </Link>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Register</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}


