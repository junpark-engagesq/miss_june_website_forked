import './Tour.css';
import Show from './Show/Show.js';
import { upcomingShows, bandBiography } from '../variables';

function Tour() {
  return (
    <section id="tour">
      <div className="section-padding">
        <h1>SHOWS</h1>
        <div className="shows">
          {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
        </div>

      <br/>
        <h1 className="section-title">ABOUT</h1>
        <div>
            <img className="bandImage" src="/images/band_image.png"></img>
        </div>
        <div id="bio">
            {bandBiography.map((line, index) =>
              <p className="bioSentence">{line}</p> 
              )}
        </div>
      </div>
    </section>
  );
}

export default Tour;
