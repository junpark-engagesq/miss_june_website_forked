import './Header.css';

//facebook
//instagram
//bandcamp
//youtube
//spotify
//applemusic

const toggleNavbar = () => {
  var navItems = document.getElementById("navItems");
  var menuIcon = document.getElementById("navBarIcon");
  var navbar = document.getElementById("navbar");
  
  navbar.classList.toggle("showBackground");
  navItems.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-x");
}

function Header() {
  return (
    <header id="header">
      <span id="socials">
        <a class="socialIcon" href="https://www.facebook.com/missjunenz/"><i className="fa-brands fa-lg fa-facebook-f icon"></i></a>
        <a class="socialIcon" href="https://www.instagram.com/ihatemissjune/"><i className="fa-brands fa-lg fa-instagram" icon></i></a>
        <a class="socialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp"><i className="fa-brands fa-lg fa-spotify icon"></i></a>
        <a class="socialIcon" href="https://www.youtube.com/@missjunevevo4647"><i className="fa-brands fa-lg fa-youtube icon"></i></a>
        <a class="socialIcon" href="https://missjune.bandcamp.com/"><i className="fa-brands fa-lg fa-bandcamp icon"></i></a>
        <a class="socialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836"><i className="fa-brands fa-lg fa-apple icon"></i></a>
        <a class="socialIcon" href="https://soundcloud.com/missjuneband"><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
      </span>

      <nav id="navbar" className="">
        <span id="navItems" className="hidden">
          <a className="navItem" href="#">HOME</a>
          <a className="navItem" href="#watch">WATCH</a>
          <a className="navItem" href="#merch">MERCH</a>
          <a className="navItem" href="#tour">TOURS</a>
          <a className="navItem" href="#contact">CONTACT</a>
        </span>
        <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleNavbar()}></i>       
      </nav>
    </header>
  );
}

export default Header;
