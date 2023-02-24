import './SocialsBanner.css';

//facebook
//instagram
//bandcamp
//youtube
//spotify
//applemusic

function SocialsBanner() {
  return (
    <span>
      <img className="socialsIcon" src="/SVGs/facebook-f.svg"/>
      <img className="socialsIcon" src="/SVGs/instagram.svg"/>
      <img className="socialsIcon" src="/SVGs/spotify.svg"/>
      <img className="socialsIcon" src="/SVGs/youtube.svg"/>
      <img className="socialsIcon" src="/SVGs/apple.svg"/>
      <img className="socialsIcon" src="/SVGs/bandcamp.svg"/>
    </span>
  );
}

export default SocialsBanner;
