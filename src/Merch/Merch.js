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
        <h1>MERCH</h1>
        <div id="merchItems">
          {currentMerch.map((merchItem, index) => {
            if( index < numItemsToDisplay ) return <MerchItem item={merchItem} key={index} />
            })
          }
        </div>
        { (numItemsToDisplay < totalMerchItems) && 
          <button className="Button" onClick={changeNumberOfDisplayedItems}>
              SHOW MORE
          </button>
        }
    </section>
  );
}

export default Merch;

