import React from "react"
// import search from '../utils/API';
import "../Styles/Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <header className="fluid"><h1>Open Charge Map</h1></header>
            {/* <div className="dashboard-container"> */}
                {/* <aside>
                    <div className="search-container">
                        <input placeholder="Enter search here..." type="text" />
                        <div className="btn-container">
                            <button onClick={LocationCard}>Search</button>
                            <button>Clear</button>
                        </div>
                        <div className="history-container">
                            dynamically render history cards
                        </div>
                        
                    </div>     
                </aside>   
                <main>
                    <div className="location-container">
                        <h2>Locations</h2>
                        <div className="locations">
                             dynamically render chargin station location cards
                             <LocationCard />
                        </div>
                    </div>
                </main> */}
                <iframe src="https://map.openchargemap.io/?mode=embedded" allow="geolocation" frameborder="0" width="100%" height="800px"></iframe>
            {/* </div> */}
        </>
    );
}

export default Dashboard;