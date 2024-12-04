import './App.css';
function Nav() {
  return (

    <footer className="footer">
      <span><img className='nav-icon' src={require(`./img/icon-nav1.png`)} /></span>
      <span><img className='nav-icon' src={require(`./img/icon-nav2.png`)} /></span>
      <span><img className='nav-icon' src={require(`./img/icon-nav3.png`)} /></span>
      <span><img className='nav-icon' src={require(`./img/icon-nav4.png`)} /></span>
    </footer>
  );
}

export default Nav;