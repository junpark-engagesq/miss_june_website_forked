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
          <h2>MISS JUNE</h2>
          <h2>BAD LUCK PARTY</h2>
          <a href="" target="_blank" rel="norefferer" className="Button notSoldOut">
            OUT NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
