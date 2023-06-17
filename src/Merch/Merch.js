import { useState } from 'react';
import './Merch.css';
import MerchItem from './MerchItem/MerchItem.js';
import { currentMerch, merchShopURL } from '../variables';
import Button from '../Button/Button.js';

var totalMerchItems = currentMerch.length;

function Merch() {
  const width  = ( window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth );
  var incrementAmount = 3;
  if( width < 1024 ) incrementAmount = 2;

  const [numItemsToDisplay, setNumItemsToDisplay] = useState(( incrementAmount === 2) ? 4 : 3);
  const changeNumberOfDisplayedItems = () => {
      var newNumItemsToDisplay = (numItemsToDisplay + incrementAmount <= totalMerchItems) ? (numItemsToDisplay + incrementAmount) : numItemsToDisplay;
      setNumItemsToDisplay(newNumItemsToDisplay);
  };

  const displayMerch = () => {
    if( currentMerch.length )
    {
      return <div id="merchItems-wrapper">
        <div id="merchItems">
          {currentMerch.map((merchItem, index) => {
            if( index < numItemsToDisplay ) return <MerchItem item={merchItem} key={index} />
            else return <></>})
          }
        </div>
        { (numItemsToDisplay + incrementAmount <= totalMerchItems) && 
          <button className="Button" onClick={changeNumberOfDisplayedItems}>
              SHOW MORE
              <i class="fa-solid fa-arrow-down"></i>
          </button>
        }
        { (numItemsToDisplay + incrementAmount > totalMerchItems) && 
            <Button 
            buttonText= "VISIT SHOP"
            URL={merchShopURL} 
          />
        }
      </div>
    }
    else
    {
      return (
        <div id="merchItems-wrapper">
            <p className="white-bg">new merch coming soon</p>
            <p className="white-bg">:)</p>
        </div>
    )}
  }

  return (
    <section id="merch">
      <div className="section-padding">
          <div className="section-title-wrapper">
            <h1 className="section-title">MERCH</h1>
          </div>
          { displayMerch() }
      </div>
    </section>
  );
}

export default Merch;

