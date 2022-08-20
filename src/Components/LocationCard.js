import React from "react";
import "./Styles/LocationCard.css"

const LocationCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>City Name</h3>
            </div>
            <div className="card-body">
                <div className="img">
                    <img src="" alt="station img" />
                </div>
                <div className="description">
                    <p>Location</p>
                    <p>Hours</p>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;