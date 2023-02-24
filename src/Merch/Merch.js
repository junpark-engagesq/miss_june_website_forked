import './Merch.css';
import MerchItem from './MerchItem/MerchItem.js';

function Merch() {
  return (
    <section className="merch">
        <h1>Merch</h1>
        {currentMerch.map((merchItem, index) => <MerchItem item={merchItem} key={index} />)}
    </section>
  );
}

export default Merch;

const currentMerch = [
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "www.google.com"
  }
]