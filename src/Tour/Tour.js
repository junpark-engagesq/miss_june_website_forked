import './Tour.css';
import Show from './Show/Show.js';

function Tour() {
  return (
    <section className="tour">
        <h1>Tour</h1>
        {upcomingShows.map((singleShow, index) => <Show show={singleShow} key={index} />)}
    </section>
  );
}

const upcomingShows = [
    {
        date : "11/03/23", 
        venue : "Western Springs", 
        country : "NZ", 
        city : "Auckland",
        info : "Supporting My Chemical Romance",
        linkToTickets : "www.google.com"
    }
]


export default Tour;
