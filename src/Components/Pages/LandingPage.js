import React from "react";
import "../Styles/LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landing-container">
            {/* <div className="bio-container"> */}
                <p className="bio-container">
                    Hi! My name is Carl Logerie and I am a full stack software engineer. I recently graduated from the Rutgers Coding Bootcamp and wanted to test my skills by building a full stack web applicatin from scratch. This app was also inspired by parents. With the rise of electric vehicles, my parents are considering switching to an electric powered car. However, my mother has been expressing her concern for charging stations. She is unsure of where to find them so I decided to create an app that displays charging station locations based on the user's search input. If you have any questions about this web application or want to get in contact feel free to send me a message below!
                </p>
            {/* </div> */}
            <div className="contact-container">
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="text" />
                <textarea  placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">Send</button>
            </div>
        </div>
    );
}

export default LandingPage;