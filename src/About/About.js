import './About.css';
import { bandBiography } from '../variables';

function About() {
  return (
    <section id="about">
      <div className="section-padding">
        <h1 className="section-title">ABOUT</h1>
        <div>
            <img className="bandImage" src="/images/band_image.png"></img>
        </div>
        <div id="bio">
            <p>{bandBiography}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
