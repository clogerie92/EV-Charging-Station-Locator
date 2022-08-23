import React from "react";
import "../Styles/AboutPage.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="about-plugspot">
                <figure className="ev-charger-figure-1">
                  <img src="https://images.unsplash.com/photo-1616361715059-9daf3fdd50be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="ev chargin station" />
                </figure>
                <article className="about-article">
                  <h2>What is PlugSpot?</h2>
                  <p>PlugSpot is a web application built to help the community of electric vehicle owners. Get started by continuing as a guest or creating an account to find a charging station near you!</p>
                </article>
            </div>
            <div className="about-here-api">
                <article className="about-article">
                  <h2>How does it work?</h2>
                  <p>PlugSpot uses the EV Charging Station API powered by HERE Technologies. This is a RESTful API that provides lists of charging station locations. It also includes information on connector types, hours of operation, and dynamic data about connector availability at charging stations for electric vehicles.</p>
                </article>
                <figure className="here-api-figure">
                  <img src="https://developer.here.com/images/herelogo.png" alt="here logo" />
                </figure>
            </div>
        </div>
    );
}

export default HomePage;