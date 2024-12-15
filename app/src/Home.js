import React, { useState, useEffect } from "react";
import podcast1 from './img/podcast-1.png';
import podcast2 from './img/podcast-2.png';
import podcast3 from './img/podcast-3.png';
import Chatbot from './Chatbot';

const podcastImages = [podcast1, podcast2, podcast3];

function Home() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";
    
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/users/`);
                if (!response.ok) throw new Error("Failed to fetch users");
    
                const data = await response.json();
                console.log("Fetched users:", data);
    
                setUsers(data);
    
                const storedUser = JSON.parse(localStorage.getItem("user"));
                console.log("Stored user from localStorage:", storedUser);
    
                if (storedUser) {
                    const loggedInUser = data
                        .filter((u) => u.email) // Filter out invalid users
                        .find((u) =>
                            u.email.trim().toLowerCase() === storedUser.email.trim().toLowerCase()
                        );
    
                    if (!loggedInUser) {
                        console.warn("No matching user found for stored user:", storedUser.email);
                    }
    
                    setCurrentUser(loggedInUser || null);
                }
    
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Could not fetch users. Please try again later.");
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    

    return (
        <div className="LandingPage">
            <div className="landing-greeting">
                {currentUser ? (
                    <p>Good Morning, {currentUser.name}! What do you need the most help with today?</p>
                ) : (
                    <p>Welcome!  What do you need the most help with today?</p>
                )}
                <Chatbot />
            </div>

            <div className="landing-last-msg">
                <h4>
                    <img
                        className="icon"
                        src={require(`./img/icon-message.png`)}
                        alt="Message Icon"
                    />
                    Your Last Message
                </h4>
                <div className="textbox">
                    <p>
                        We are sorry to hear you are really stressed from your assignments.
                        We hope that these resources can help you better plan your assignments and help evaluate how much time you need to spend on them.
                        <br />
                        To-Do List: Homework
                        <br />
                        Pomodoro: 15-25 x3
                    </p>
                </div>
            </div>

            <div className="landing-resource">
                <h3>Resources</h3>
                <div className="resource-category" id="productivity">
                    <h4>Productivity</h4>
                    <div className="row">
                        {["productivity-1", "productivity-2", "productivity-3"].map((img, index) => (
                            <span key={index}>
                                <img
                                    className="resource-card"
                                    src={require(`./img/${img}.png`)}
                                    alt={`Productivity Resource ${index + 1}`}
                                />
                            </span>
                        ))}
                    </div>
                </div>
                <div className="resource-category" id="podcast">
                    <h4>Podcast</h4>
                    <div className="row">
                        {podcastImages.map((src, index) => (
                            <span key={index}>
                                <img
                                    className="resource-card"
                                    src={src}
                                    alt={`Podcast Resource ${index + 1}`}
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
