import './Tour.css';
import Show from './Show/Show.js';
import { upcomingShows } from '../variables';

function Tour() {
  return (
    <section id="tour">
        <h1>SHOWS</h1>
        <div>
            <img className="bandImage" src="/images/band_image.png"></img>
        </div>
        <div className="shows">
          {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
        </div>
    </section>
  );
}

export default Tour;
