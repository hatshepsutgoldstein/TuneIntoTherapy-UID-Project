import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (

    <footer className="footer">
      <span>
        <Link to="/">
          <img className="nav-icon" src={require('./img/icon-nav1.png')} alt="Home" />
        </Link>
      </span>
      <span>
        <img className="nav-icon" src={require('./img/icon-nav2.png')} alt="Bookmark" />
      </span>
      <span>
        <img className="nav-icon" src={require('./img/icon-nav3.png')} alt="Checklist" />
      </span>
      <span>
        <img className="nav-icon" src={require('./img/icon-nav4.png')} alt="Notifications" />
      </span>
    </footer>
  );
}

export default Nav;