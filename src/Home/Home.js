import './Home.css';
import HomeItem from './HomeItem/HomeItem';
import { homeHeader } from '../variables';


function Home() {
  return (
    <section id="home">
        <div id="homepageImg">
          {homeHeader.map((homeImage, index) => <HomeItem homeitem={homeImage} key={index} />)}
        </div>
    </section>
  );
}

export default Home;
