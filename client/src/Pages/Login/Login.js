import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss"
import logoLogin from "../../assets/Images/logo_colored_transparent.png";

function Login() {
    return (
    <section className="login">
        <div className="login__background">
            <form className="login__form">
                <div className="login__imageContainer">
                    <img className="login__logoImg" src={logoLogin} alt="thoughtpenny"/>
                </div>
                <label className="login__userLabel" htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    className="login__userEntry"
                    placeholder="marcus.aurelius@gmail.com">
                </input>
                <label className="login__userLabel" htmlFor="userPwd">Password</label>
                <input
                    type="text"
                    name="userPwd"
                    className="login__userEntry"
                    placeholder="**********">
                </input>
                <div className="login__buttonContainer">
                    <Link to="/" type="submit" className="login__button" >SAVE</Link>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Login;