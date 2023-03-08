import './Merch.css';
import MerchItem from './MerchItem/MerchItem.js';
import { currentMerch } from '../variables';

function Merch() {
  return (
    <section id="merch">
        <h1>MERCH</h1>
        <div id="merchItems">
          {currentMerch.map((merchItem, index) => <MerchItem item={merchItem} key={index} />)}
        </div>
    </section>
  );
}

export default Merch;

