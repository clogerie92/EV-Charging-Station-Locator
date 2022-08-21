import React from "react"
import "../Styles/Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <header className="fluid"><h1>Dashboard</h1></header>
            <div className="dashboard-container">
                <aside>
                    <div className="search-container">
                        <input placeholder="Enter search here..." type="text" />
                        <div className="btn-container">
                            <button>Search</button>
                            <button>Clear</button>
                        </div>
                        <div className="history-container">
                            {/* dynamically render history cards */}
                        </div>
                    </div>     
                </aside>   
                <main>
                    <div className="location-container">
                        <h2>Locations</h2>
                        <div className="locations">
                             {/* dynamically render chargin station location cards */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Dashboard;