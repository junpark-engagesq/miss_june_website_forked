import './Watch.css';
import { videoToDisplay } from '../variables';

function Watch() {
    return (
    <section id="watch">
        <h1>Watch</h1>
        <span id="video">
            <iframe width="720" height="405" src={videoToDisplay}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
            </iframe>
        </span>
    </section>
  );
}

export default Watch;
