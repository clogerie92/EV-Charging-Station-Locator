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
                  <p>PlugSpot is a web application built to help the community of electric vehicle owners. Get started by navigating the Dashboard and enter a city anywhere around the world!</p>
                </article>
            </div>
            <div className="about-here-api">
                <article className="about-article">
                  <h2>How does it work?</h2>
                  <p>PlugSpot uses the Open Charge Map API. Users can simply type the name of city in the search field above the map and charging station locations will be pinned in and around that city.</p>
                </article>
                <figure className="open-charge-api-figure">
                  <img src="https://ecogears.in/wp-content/uploads/2022/01/open-charge-map-app-for-electric-car-drivers.jpg" alt="here logo" />
                </figure>
            </div>
        </div>
    );
}

export default HomePage;