import './Header.css';

	const toggleNavbar = () => {
  var navBar = document.getElementById('navBar');
  var menuIcon = document.getElementById("navBarIcon");

  navBar.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-x");
  menuIcon.classList.toggle('spin');
}

function Header() {
  return (
    <header id="header">
      <div class='logo'><img src="MissJuneLogoNav.png" alt="Logo"></img></div>
      <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleNavbar()}></i>
      <nav id="navBar" className="hidden">
        <span id="mobileSocials">
          <a className="mobileSocialIcon" href="https://www.facebook.com/missjunenz/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-facebook-f icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://www.instagram.com/ihatemissjune/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-instagram" icon onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-spotify icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-youtube icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://missjune.bandcamp.com/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-bandcamp icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836" target="_blank" rel="norefferer" onClick={() => toggleNavbar()}><i className="fa-brands fa-lg fa-apple icon"></i></a>
          <a className="mobileSocialIcon" href="https://soundcloud.com/missjuneband" target="_blank" rel="norefferer" onClick={() => toggleNavbar()}><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
        </span>
        <ul id="navItems">
          <li><a className="navItem" id="navListItem" href="#" onClick={() => toggleNavbar()}>HOME</a></li>
          <li><a className="navItem" id="navListItem" href="#watch" onClick={() => toggleNavbar()}>WATCH</a></li>
          <li><a className="navItem" id="navListItem" href="#merch" onClick={() => toggleNavbar()}>MERCH</a></li>
          <li><a className="navItem" id="navListItem" href="#shows" onClick={() => toggleNavbar()}>SHOWS</a></li>
          <li><a className="navItem" id="navListItem" href="#about" onClick={() => toggleNavbar()}>ABOUT</a></li>
          <li><a className="navItem" id="navListItem" href="#contact"onClick={() => toggleNavbar()}>CONTACT</a></li>
        </ul> 
      </nav>
    </header>
  );
}



export default Header;
