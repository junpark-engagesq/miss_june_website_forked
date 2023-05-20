import './Header.css';

	const toggleNavbar = () => {
  var navBar = document.getElementById('navBar');
  var menuIcon = document.getElementById("navBarIcon");

  navBar.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-x");
  menuIcon.classList.toggle('spin');

  
  // var navBar = document.getElementById('navBarIcon');
  // navBar.addEventListener('click', function(event) {
  //   // Add your logic here for handling the click event on the icon
  //   console.log('Icon clicked!');
  // });
}



function Header() {
  return (
    <header id="header">
      <nav id="navBar" className="hidden">
      {/* <div class='logo'><img src="android-chrome-384x384.png" alt="Logo"></img></div> */}
        <span id="mobileSocials" className="">
          <a className="mobileSocialIcon" href="https://www.facebook.com/missjunenz/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-facebook-f icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://www.instagram.com/ihatemissjune/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-instagram" icon onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://open.spotify.com/artist/5EVVKA7mtSCAgk1kDhAEFp" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-spotify icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-youtube icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://missjune.bandcamp.com/" target="_blank" rel="norefferer"><i className="fa-brands fa-lg fa-bandcamp icon" onClick={() => toggleNavbar()}></i></a>
          <a className="mobileSocialIcon" href="https://music.apple.com/nz/artist/miss-june/668816836" target="_blank" rel="norefferer" onClick={() => toggleNavbar()}><i className="fa-brands fa-lg fa-apple icon"></i></a>
          <a className="mobileSocialIcon" href="https://soundcloud.com/missjuneband" target="_blank" rel="norefferer" onClick={() => toggleNavbar()}><i className="fa-brands fa-lg fa-soundcloud icon"></i></a>
        </span>
        <ul id="navItems" className="">
          <li><a className="navItem" id="navListItem" href="#" onClick={() => toggleNavbar()}>HOME </a></li>
          <li><a className="navItem" id="navListItem" href="#watch" onClick={() => toggleNavbar()}>WATCH</a></li>
          <li><a className="navItem" id="navListItem" href="#merch" onClick={() => toggleNavbar()}>MERCH</a></li>
          <li><a className="navItem" id="navListItem" href="#tour" onClick={() => toggleNavbar()}>TOURS</a></li>
          <li><a className="navItem" id="navListItem" href="#contact"onClick={() => toggleNavbar()}>CONTACT</a></li>
        </ul> 
      </nav>
      <i id="navBarIcon" className="fa-solid fa-lg fa-bars icon" onClick={() => toggleNavbar()}></i>
      
    </header>
  );
}



export default Header;
