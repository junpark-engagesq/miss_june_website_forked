import './MerchItem.css';

function MerchItem(props) {
  return (
    <div className="merchItem">
        <a href={props.item.URL} target="_blank" rel="norefferer">
            <img className="merchImage" src={props.item.imageURL}/>
            <p className="merchItem-name">{props.item.name}</p>
            <p className="merchItem-details">{props.item.details}</p>
            <p className="merchItem-price">{props.item.price}</p>
         </a>
    </div>
  );
}

export default MerchItem;
