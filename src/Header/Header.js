import './Header.css';

const toggleNavbar = () => {
  var navItems = document.getElementById("navItems");
  var menuIcon = document.getElementById("navBarIcon");
  var navbar = document.getElementById("navbar");

  

  navbar.classList.toggle("showBackground");
  navItems.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-x");
  menuIcon.classList.toggle('spin');
}



function Header() {
  return (
    <header id="header">
      <span id="socials">
        <a className="socialIcon" href="https://www.facebook.com/missjunenz/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-facebook-f icon"></i></a>
        <a className="socialIcon" href="https://www.instagram.com/ihatemissjune/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-instagram" icon></i></a>
        <a className="socialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-spotify icon"></i></a>
        <a className="socialIcon" href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-youtube icon"></i></a>
        <a className="socialIcon" href="https://missjune.bandcamp.com/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-bandcamp icon"></i></a>
        <a className="socialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-apple icon"></i></a>
        <a className="socialIcon" href="https://soundcloud.com/missjuneband" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
      </span>

      {/* <nav id="navbar" className="">
        <span id="navItems" className="hidden">
          <a className="navItem" href="#">HOME</a>
          <a className="navItem" href="#watch">WATCH</a>
          <a className="navItem" href="#merch">MERCH</a>
          <a className="navItem" href="#tour">TOURS</a>
          <a className="navItem" href="#contact">CONTACT</a>
        </span>
        <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleNavbar()}></i>       
      </nav> */}


      {/* Pooey Experimenting */}
      <nav id="navbar" className="">
        <ul>
        <span id="navItems" className="hidden">
          <li><a className="navItem" id="navListItem" href="#" onClick={() => toggleNavbar()}>HOME </a></li>
          <li><a className="navItem" id="navListItem" href="#watch" onClick={() => toggleNavbar()}>WATCH</a></li>
          <li><a className="navItem" id="navListItem" href="#merch" onClick={() => toggleNavbar()}>MERCH</a></li>
          <li><a className="navItem" id="navListItem" href="#tour" onClick={() => toggleNavbar()}>TOURS</a></li>
          <li><a className="navItem" id="navListItem" href="#contact" onClick={() => toggleNavbar()}>CONTACT</a></li>
          <span id="mobileSocials">
        <a className="mobileSocialIcon" href="https://www.facebook.com/missjunenz/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-facebook-f icon"></i></a>
        <a className="mobileSocialIcon" href="https://www.instagram.com/ihatemissjune/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-instagram" icon></i></a>
        <a className="mobileSocialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-spotify icon"></i></a>
        <a className="mobileSocialIcon" href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-youtube icon"></i></a>
        <a className="mobileSocialIcon" href="https://missjune.bandcamp.com/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-bandcamp icon"></i></a>
        <a className="mobileSocialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-apple icon"></i></a>
        <a className="mobileSocialIcon" href="https://soundcloud.com/missjuneband" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
      </span>
        </span>
        </ul>    
        <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleNavbar()}></i>
        
      </nav>
    </header>
  );
}

export default Header;
