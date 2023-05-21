import './Tour.css';
import Show from './Show/Show.js';
import { upcomingShows, noShowsMessage } from '../variables';

function Tour() {
  return (
    <section id="tour">
      <div className="section-padding">
        <h1>SHOWS</h1>
        <div className="shows">
          {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
        </div>
        { !upcomingShows.length && 
              noShowsMessage.map((sentence, index) => <p className="no-shows-message">{sentence}</p>)
         }
      </div>
    </section>
  );
}

export default Tour;
