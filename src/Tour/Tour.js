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

//date format: YYYY-MM-DD
const upcomingShows = [
    {
        date : "2023-03-03", 
        venue : "Whammy Bar", 
        country : "NZ", 
        city : "Auckland",
        info : "Support1 | Support2 | Support3",
        ticketURL : "https://www.undertheradar.co.nz/ticket/19531/Miss-June.utr"
    },
    {
        date : "2023-03-09", 
        venue : "San Fran", 
        country : "NZ", 
        city : "Wellington",
        info : "Support1 | Support2 | Support3",
        ticketURL : "https://www.undertheradar.co.nz/ticket/19532/Miss-June.utr"
    },
    {
        date : "2023-03-11", 
        venue : "Western Springs", 
        country : "NZ", 
        city : "Auckland",
        info : "My Chemical Romance",
        ticketURL : "www.google.com"
    }
]


export default Tour;
