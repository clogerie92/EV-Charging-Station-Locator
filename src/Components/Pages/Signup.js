import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <div className="signup-form-container">
                <input placeholder="Username" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="text" />
                <button type="submit">Signup</button>
            </div>
        </div>
    );
}

export default Signup;