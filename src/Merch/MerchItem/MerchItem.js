import './MerchItem.css';

function MerchItem(props) {
  return (
    <div className="merchItem">
        <a href={props.item.URL} target="_blank" rel="norefferer">
            <img className="merchImage" src={props.item.imageURL}/>
            <br />
            {props.item.name} 
         </a>
    </div>
  );
}

export default MerchItem;
