import './Watch.css';
import { videoToDisplay } from '../variables';

function Watch() {
    return (
    <section id="watch">
        <h1>WATCH</h1>
        <div id="video">
            <iframe width="720" height="405" src={videoToDisplay}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
            </iframe>
        </div>
        <div id='moreVideos'>
            <a href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer" className="Button notSoldOut">
                MORE VIDEOS 
            </a>
        </div>
        <div>
            <img className="bandImage" src="/images/band_image.png"></img>
        </div>
    </section>
  );
}

export default Watch;
