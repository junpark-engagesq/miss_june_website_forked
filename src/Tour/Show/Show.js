import './Show.css';

function Show(props) {
  return (
    <div className="show">
        <p>{props.show.date} {props.show.venue} {props.show.city} {props.show.country} {props.show.info} {props.show.linkToTickets}</p>
    </div>
  );
}

export default Show;
