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
      <div class='logo'><img src={process.env.PUBLIC_URL + "MissJuneLogoNav.png"} alt="Logo"></img></div>
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
          <li><a className="navItem" href="#" onClick={() => toggleNavbar()}>HOME <div className="underline"></div></a></li>
          <li><a className="navItem" href="#watch" onClick={() => toggleNavbar()}>WATCH <div className="underline"></div></a></li>
          <li><a className="navItem" href="#merch" onClick={() => toggleNavbar()}>MERCH <div className="underline"></div></a></li>
          <li><a className="navItem" href="#shows" onClick={() => toggleNavbar()}>SHOWS <div className="underline"></div></a></li>
          <li><a className="navItem" href="#about" onClick={() => toggleNavbar()}>ABOUT <div className="underline"></div></a></li>
          <li><a className="navItem" href="#contact"onClick={() => toggleNavbar()}>CONTACT <div className="underline"></div></a></li>
        </ul> 
      </nav>
    </header>
  );
}



export default Header;
