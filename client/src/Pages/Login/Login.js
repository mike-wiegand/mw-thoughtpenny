import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss"
import logoLogin from "../../assets/Images/logo_colored_transparent.png";

function Login() {
    return (
    <section className="login">
        <div className="login__background">
            <div className="login__quoteContainer">
                <p className="login__quote">"The universe is change; our life is what our thoughts make it."</p>
                <p className="login__author">- Marcus Aurelius</p>
            </div>
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
                    <Link to="/" type="submit" className="login__button" >LOGIN</Link>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Login;