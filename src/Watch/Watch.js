import { useState } from 'react';
import './Watch.css';
import { videosToDisplay } from '../variables';

const modOperator = (num, mod) => {
    return (( num % mod ) + mod) % mod;
}

function Watch() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const changeVideo = (prevOrNext) => {
        var increment = (prevOrNext == "prev") ? -1 : 1;
        setCurrentIndex(modOperator(currentIndex + increment, videosToDisplay.length));
    }

    return (
    <section id="watch">
        <h1>WATCH</h1>
        <div id="video">
            <iframe width="720" height="405" src={videosToDisplay[currentIndex]}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
            </iframe>
        </div>
        <button className="Button" onClick={() => changeVideo('prev')}>
              PREVIOUS
          </button>
        <button className="Button" onClick={() => changeVideo('next')}>
              NEXT
        </button>
        <p>I'll make the prev/next buttons look pretty later</p>
        <div id='moreVideos'>
            <a href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer" className="Button notSoldOut">
                MORE VIDEOS 
            </a>
        </div>
    </section>
  );
}

export default Watch;
