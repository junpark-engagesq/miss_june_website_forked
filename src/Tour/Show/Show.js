import './Show.css';
import GetTicketsButton from './GetTicketsButton/GetTicketsButton';

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Show(props) {
  
  const date = new Date(props.show.date)
  const dayNumber = date.getDate();
  const dayName = days[date.getDay()];
  const month = months[date.getMonth()];

  return (
    <div className="show">
      <div className="showDetails">
        <p className="date"> {dayName} {dayNumber} {month} </p>
        <div className="showBottomText">
          <p className="venue"> {props.show.venue} </p> 
          <p className="location"> {props.show.city}, {props.show.country} </p>
        </div>
      </div>
      <GetTicketsButton ticketURL={props.show.ticketURL} soldOut={props.show.soldOut}/>
    </div>
  );
}

export default Show;
