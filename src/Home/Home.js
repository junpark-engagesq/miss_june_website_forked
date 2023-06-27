import './Home.css';
import { albumCoverImageToDisplay, albumStreamURLAmazon, albumStreamURLSpotify, albumStreamURLAppleMusic, albumBuyLink } from '../variables';

function Home() {
  return (
    <section id="home">
      <div className="home-section-padding">
        <div className="home-row">
          <div id="homepageImg">
            <img className="homeImage"src={process.env.PUBLIC_URL + albumCoverImageToDisplay} alt="Bad Luck Party - Album Cover"></img>
          </div>
          <div id="homepage-right">
            <div id="album-content">
              <img className="miss-june-home-logo" src={process.env.PUBLIC_URL + "/images/miss-june-logo.png"} alt="Miss June"></img>
              <br/>
              <a href={albumBuyLink} target="_blank" rel="norefferer" className="Button BuyAlbumButton">
                OUT NOW
              </a>
              <div>
                <a href={albumStreamURLSpotify} target="_blank" rel="norefferer">
                  <img className="stream-logo" src={process.env.PUBLIC_URL + "/images/logo-spotify.png"} alt="Spotify"></img>
                </a>
                <a href={albumStreamURLAppleMusic} target="_blank" rel="norefferer">
                  <img className="stream-logo" src={process.env.PUBLIC_URL + "/images/logo-apple-music.png"} alt="Apple Music"></img>
                </a>
                <a href={albumStreamURLAmazon} target="_blank" rel="norefferer">
                  <img className="stream-logo" src={process.env.PUBLIC_URL + "/images/logo-amazon.png"} alt="Amazon Music"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
