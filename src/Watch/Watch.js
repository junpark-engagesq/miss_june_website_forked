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

        <a href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer" className="getTicketsButton notSoldOut">
            MORE VIDEOS 
        </a>
    </section>
  );
}

export default Watch;
