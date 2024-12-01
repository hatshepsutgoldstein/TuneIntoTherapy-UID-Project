
import { Link } from 'react-router-dom';

function Home({user}) {
    return (
        <div className="LandingPage">
            <div className='landing-greeting'>Good Morning, {user.name}!  How can we help you today? </div>
            <div className='landing-last-msg'> 
                <h4>Your Last Message</h4>
                <div className='textbox'>
                    <p>We are sorry to hear you are really stressed from your assignments. We hope that these resources can help you better plan your assignments and help evaluate how much time you need to spend on them.</p>
                    <p>To-Do List: Homework</p>
                    <p>Pomodoro: 15-25 x3</p>
                </div>
            </div>
            <div className='landing-resource'>
                <h4>Resources</h4>
                
            </div>
        </div> 
    );
}

export default Home;