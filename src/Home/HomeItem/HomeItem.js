import './HomeItem.css';

function HomeItem(props) {
  return (
    <div className="homeItem">
        <img className="homeImage"src={props.homeitem.imageURL}></img>
        <h1 className="homeName">{props.homeitem.name}</h1>
        <a href={props.homeitem.URL} target="_blank" rel="norefferer">
        <h1 className="homeBuyNow">{props.homeitem.buyNow}</h1>
        </a>
    </div>
  );
}

export default HomeItem;
