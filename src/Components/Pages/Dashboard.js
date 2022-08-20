import React from "react"
import "../Styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="search-container">
                <input placeholder="Enter search here..." type="text" />
                <div className="btn-container">
                    <button>Search</button>
                    <button>Empty</button>
                </div>
                <div className="history-container">
                    {/* dynamically render history cards */}
                </div>
            </div>    
            <div className="location-container">
                {/* dynamically render chargin station location cards */}
                <h2>Locations</h2>
            </div>
        </div>
    );
}

export default Dashboard;