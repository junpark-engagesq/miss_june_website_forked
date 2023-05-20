import './Tour.css';
import Show from './Show/Show.js';
import { upcomingShows } from '../variables';

function Tour() {
  return (
    <section id="tour">
      <div className="section-padding">
        <h1>SHOWS</h1>
        <div className="shows">
          {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
        </div>
      </div>
    </section>
  );
}

export default Tour;
