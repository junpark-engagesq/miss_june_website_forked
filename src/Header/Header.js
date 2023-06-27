import './Header.css';
import React, { useState } from 'react';



function Header() {

  const [isNavBarHidden, setIsNavBarHidden] = useState(true);

  const toggleNavbar = () => {
    setIsNavBarHidden(!isNavBarHidden);
    }

  return (
    <header id="header">
      <div class='logo'><img src={process.env.PUBLIC_URL + "MissJuneLogoNav.png"} alt="Logo"></img></div>
      <i id="navBarIcon" className={`fa-solid fa-lg fa-bars icon ${isNavBarHidden ? '' : 'active fa-x'}`}
        onClick={toggleNavbar}></i>
      <nav id="navBar" className={isNavBarHidden ? 'hidden' : ''}>
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
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-1'} href="#home" onClick={() => toggleNavbar()}>HOME <div className="underline"></div></a></li>
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-2'} href="#watch" onClick={() => toggleNavbar()}>WATCH <div className="underline"></div></a></li>
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-3'} href="#merch" onClick={() => toggleNavbar()}>MERCH <div className="underline"></div></a></li>
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-4'} href="#shows" onClick={() => toggleNavbar()}>SHOWS <div className="underline"></div></a></li>
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-5'} href="#about" onClick={() => toggleNavbar()}>ABOUT <div className="underline"></div></a></li>
          <li><a className={isNavBarHidden ? 'hidden navItem ' : 'navItem slideIn animation-delay-6'} href="#contact"onClick={() => toggleNavbar()}>CONTACT <div className="underline"></div></a></li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;
