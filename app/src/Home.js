function Home({user}) {
    return (
        <div className="LandingPage">
            <div className='landing-greeting'>Good Morning, {user.name}! <br></br> How can we help you today? </div>
            <div className='landing-last-msg'> 
                <h4><img className='icon' src={require(`./img/icon-message.png`)} />Your Last Message</h4>
                <div className='textbox'>
                    <p>
                    We are sorry to hear you are really stressed from your assignments. We hope that these resources can help you better plan your assignments and help evaluate how much time you need to spend on them.
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
                            <span><img className='resource-card' src={require(`./img/productivity-1.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/productivity-2.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/productivity-3.png`)} /></span>
   
                        </div>
                    </div>
                    <div className='resource-category'id='podcast'>
                        <h4>Podcast</h4>
                        <div className='row'>
                            <span><img className='resource-card' src={require(`./img/podcast-1.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/podcast-2.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/podcast-3.png`)} /></span>
   
                        </div>
                    </div>
                    <div className='resource-category'id='podcast'>
                        <h4>test-scrollPodcast</h4>
                        <div className='row'>
                            <span><img className='resource-card' src={require(`./img/podcast-1.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/podcast-2.png`)} /></span>
                            <span><img className='resource-card' src={require(`./img/podcast-3.png`)} /></span>
   
                        </div>
                    </div>
                
            </div>
        </div> 
    );
}

export default Home;