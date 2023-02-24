import './Watch.css';

const opts = {
      height: '390',
      width: '640',
}


function Watch() {

    return (
    <section className="watch">
        <h1>Watch</h1>
        <iframe width="720" height="405" src="https://www.youtube.com/embed/RZg4YW95aGU" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
        </iframe>
    </section>
  );
}

export default Watch;
