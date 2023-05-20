import { useState } from 'react';
import './Merch.css';
import MerchItem from './MerchItem/MerchItem.js';
import { currentMerch } from '../variables';

var totalMerchItems = currentMerch.length;

function Merch() {
  const [numItemsToDisplay, setNumItemsToDisplay] = useState(3);
  const changeNumberOfDisplayedItems = () => {
      setNumItemsToDisplay(Math.min(totalMerchItems, numItemsToDisplay + 3));
  };

  return (
    <section id="merch">
      <div className="section-padding">
        <h1 className="section-title">MERCH</h1>
        <div id="merchItems">
          {currentMerch.map((merchItem, index) => {
            if( index < numItemsToDisplay ) return <MerchItem item={merchItem} key={index} />
            })
          }
        </div>
        { (numItemsToDisplay < totalMerchItems) && 
          <button className="Button defaultButton showMoreButton" onClick={changeNumberOfDisplayedItems}>
              SHOW MORE
              <i class="fa-solid fa-arrow-down"></i>
          </button>
        }
      </div>
    </section>
  );
}

export default Merch;

