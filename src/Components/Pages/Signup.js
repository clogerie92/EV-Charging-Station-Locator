import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2>Signup</h2>
                <input placeholder="Username" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="text" />
                <button id="signup-btn" type="submit">Signup</button>
                <div className="signin-portal">
                    <div className="signin-option">
                        <p>Already have an account?</p>
                        <button type="submit">Signin</button>
                    </div>
                    <div className="guest-option">
                        <p>Or continue as guest</p>
                        <button type="submit">Guest</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;