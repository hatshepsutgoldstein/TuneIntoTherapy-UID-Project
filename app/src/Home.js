import React from "react";
import podcast1 from './img/podcast-1.png';
import podcast2 from './img/podcast-2.png';
import podcast3 from './img/podcast-3.png';
import Chatbot from './Chatbot';



const podcastImages = [podcast1, podcast2, podcast3];

function Home({user}) {
    return (
        <div className="LandingPage">
            <div className='landing-greeting'>Good Morning, {user.name}! <br></br>
            <Chatbot /> 
             </div>
             
            <div className='landing-last-msg'> 
                <h4>
                    <img 
                        className='icon' 
                        src={require(`./img/icon-message.png`)} 
                        alt="Message Icon"
                    />
                    Your Last Message
                </h4>
                <div className='textbox'>
                    <p>
                    We are sorry to hear you are really stressed from your assignments. 
                    We hope that these resources can help you better plan your assignments and help evaluate how much time you need to spend on them.
                    <br></br>To-Do List: Homework<br></br>
                    Pomodoro: 15-25 x3
                    </p>
                </div>
            </div>
            <div className='landing-resource'>
                <h3>Resources</h3>
                    <div className='resource-category' id='productivity'>
                        <h4>Productivity</h4>
                        <div className='row'>
                            {["productivity-1", "productivity-2", "productivity-3"].map((img, index) => (
                                <span key={index}>
                                    <img 
                                        className='resource-card' 
                                        src={require(`./img/${img}.png`)}
                                        alt={`Productivity Resource ${index + 1}`}
                                    />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='resource-category'id='podcast'>
                        <h4>Podcast</h4>
                        <div className='row'>
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