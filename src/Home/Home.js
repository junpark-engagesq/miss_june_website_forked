import './Home.css';
import { albumCoverImageToDisplay } from '../variables';

function Home() {
  return (
    <section id="home">
      <div className="home-row">
        <div id="homepageImg">
          <img className="homeImage"src={albumCoverImageToDisplay} alt="Miss June Album Cover"></img>
        </div>
        <div id="homepage-right">
          <div id="album-content">
            <h2>MISS JUNE</h2>
            <h2>BAD LUCK PARTY</h2>
            <p id="albumQuote">Lyrical quote from the album goes here...</p>
            <a href="" target="_blank" rel="norefferer" className="Button notSoldOut">
              OUT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
