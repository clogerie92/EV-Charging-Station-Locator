import React from "react";
import "../Styles/Signin.css";

const Signin = () => {
    return (
        <div className="signin-container">
            <div className="signin-form-container">
                <h2>Signin</h2>
                <input placeholder="Username" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="text" />
                <button type="submit">Signin</button>
                <div className="guest-portal">
                    <p>Don't have an account? Continue as a guest here...</p>
                    <button id="continue-btn" type="submit">Guest</button>
                </div>
            </div>
        </div>
    );
}

export default Signin;