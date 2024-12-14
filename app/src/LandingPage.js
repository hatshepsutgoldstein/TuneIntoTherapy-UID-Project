
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="LandingPage">
            <h4>We are here to Help You!</h4>
            <h4>Say goodbye to stress with our daily check-ins and resources</h4>
            <form className="form">
                <Link to="/create-account" className="create-account" >Create an account</Link>
                <br></br>
                <Link to="/login" className="log-in" >Log In</Link>
            </form>
        </div>
    );
}

export default LandingPage;