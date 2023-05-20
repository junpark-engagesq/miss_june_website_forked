import './Header.css';

// const toggleNavbar = () => {
//   var navbar = document.querySelector("navbar");
//   var navItems = document.querySelector("navItems");
//   var menuIcon = document.querySelector("navBarIcon");

//   navbar.classList.toggle("showBackground");
//   navItems.classList.toggle("hidden");
//   menuIcon.classList.toggle("fa-bars");
//   menuIcon.classList.toggle("fa-x");
//   menuIcon.classList.toggle('spin');
// }

  var navbar = document.querySelector("navbar");
  var navItems = document.querySelector("navItems");
  var menuIcon = document.querySelector("navBarIcon");
// Toggle menu
function toggleMenu() {
  navItems.classList.toggle('open');
  menuIcon.classList.toggle('change');
  navItems.classList.remove('hidden'); // Remove the 'hidden' class
}

// Add event listener to hamburger
navbar.addEventListener('click', toggleMenu);


function Header() {
  return (
    <header id="header">
      <nav id="navBar" className="">
        <span id="mobileSocials" className="hidden">
          <a className="mobileSocialIcon" href="https://www.facebook.com/missjunenz/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-facebook-f icon"></i></a>
          <a className="mobileSocialIcon" href="https://www.instagram.com/ihatemissjune/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-instagram" icon></i></a>
          <a className="mobileSocialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-spotify icon"></i></a>
          <a className="mobileSocialIcon" href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-youtube icon"></i></a>
          <a className="mobileSocialIcon" href="https://missjune.bandcamp.com/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-bandcamp icon"></i></a>
          <a className="mobileSocialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-apple icon"></i></a>
          <a className="mobileSocialIcon" href="https://soundcloud.com/missjuneband" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
        </span>
        <ul id="navItems" className="hidden">
          <li><a className="navItem" id="navListItem" href="#" >HOME </a></li>
          <li><a className="navItem" id="navListItem" href="#watch" >WATCH</a></li>
          <li><a className="navItem" id="navListItem" href="#merch" >MERCH</a></li>
          <li><a className="navItem" id="navListItem" href="#tour" >TOURS</a></li>
          <li><a className="navItem" id="navListItem" href="#contact">CONTACT</a></li>
        </ul> 
        <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleMenu()} ></i>
      </nav>
    </header>
  );
}

export default Header;
