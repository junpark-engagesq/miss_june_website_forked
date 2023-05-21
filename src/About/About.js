import './About.css';
import { bandBiography } from '../variables';

function About() {
  return (
    <section id="about">
      <div className="section-padding">
        <div className="section-title-wrapper">
          <h1 className="section-title">ABOUT</h1>
        </div>
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

export default About;

