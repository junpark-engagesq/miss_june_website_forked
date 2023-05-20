import './Home.css';
import { albumCoverImageToDisplay, albumStreamURLAmazon, albumStreamURLSpotify, albumStreamURLAppleMusic, albumBuyLink } from '../variables';

function Home() {
  return (
    <section id="home">
      {/* <img className="miss-june-logo" src="/images/miss-june-logo.png"></img> */}
      <div className="home-row">
        <div id="homepageImg">
          <img className="homeImage"src={albumCoverImageToDisplay} alt="Miss June Album Cover"></img>
        </div>
        <div id="homepage-right">
          <div id="album-content">
            {/* <h2 className="album-header">MISS JUNE</h2> */}
            {/* <h2 className="album-header">BAD LUCK PARTY</h2> */}
            <img className="logo-test" src="/images/miss-june-logo.png"></img>
            <p id="albumQuote">Lyrical quote from the album goes here...</p>
            <a href={albumBuyLink} target="_blank" rel="norefferer" className="Button hover-grow BuyAlbumButton">
              OUT NOW
            </a>
            <div>
              <a href={albumStreamURLSpotify} target="_blank" rel="norefferer">
                <img className="stream-logo" src="/images/logo-spotify.png"></img>
              </a>
              <a href={albumStreamURLAppleMusic} target="_blank" rel="norefferer">
                <img className="stream-logo" src="/images/logo-apple-music.png"></img>
              </a>
              <a href={albumStreamURLAmazon} target="_blank" rel="norefferer">
                <img className="stream-logo" src="/images/logo-amazon.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
