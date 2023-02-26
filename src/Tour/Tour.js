import './Tour.css';
import Show from './Show/Show.js';
import { upcomingShows } from '../variables';

function Tour() {
  return (
    <section id="tour">
        <h1>Shows</h1>
        {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
    </section>
  );
}

export default Tour;
