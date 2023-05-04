import './Home.css';
import { albumCoverImageToDisplay } from '../variables';

function Home() {
  return (
    <section id="home">
      <div className="home-row">
        <div id="homepageImg">
          <img className="homeImage"src={albumCoverImageToDisplay}></img>
        </div>
        <div id="homepage-right">
          <h3>STUFF HERE</h3>
          <a href="" target="_blank" rel="norefferer" className="getTicketsButton notSoldOut">
            OUT NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
