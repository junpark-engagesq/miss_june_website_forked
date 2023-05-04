import './Home.css';
import { albumCoverImageToDisplay } from '../variables';

function Home() {
  return (
    <section id="home">
        <div id="homepageImg">
          <img className="homeImage"src={albumCoverImageToDisplay}></img>
        </div>
        <div>
          <a href="" target="_blank" rel="norefferer" className="getTicketsButton notSoldOut">
            OUT NOW
          </a>
        </div>
    </section>
  );
}

export default Home;
