import './Shows.css';
import Show from './Show/Show.js';
import { upcomingShows, noShowsMessage } from '../variables';

function Shows() {

  const displayShows = () => {
    if( upcomingShows.length )
    {
      return (
        <div className="showsList">
          {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
        </div>
      )
    }
    else
    {
      return (
        <div>
          <p className="no-shows-message">new shows announcement coming soon...</p>
          <p className="no-shows-message">:) </p>
      </div>
      )
    }
  }

  return (
    <section id="shows">
      <div className="section-padding">
        <div className="section-title-wrapper">
          <h1 className="section-title">SHOWS</h1>
        </div>
        { displayShows() }
      </div>
    </section>
  );
}

export default Shows;
