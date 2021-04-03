import "./Hats.css";
import { useState } from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images);
    return images;
  }
  
const images = importAll(require.context('./img/hats', false, /\.(png|jpe?g|svg)$/));

const Hats = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const hatsArr = ["archerHat", "bowlerHat", "catEars", "crown", "headphones", "jesterHat", "magicianHat", "purplePartyHat", "fedora", "halo"];
      
    const switchItem = (arr) => e => {
      switch (count) {
      case arr.length - 1: setCount(initialCount);
      break;
      default: setCount(prevCount => prevCount + 1);
      break;
      }
     }
    
    return ( 
        <div className="hats">
        <button onClick={ switchItem(hatsArr) }>
          <img src={ images[hatsArr[count]+'.png'].default } alt="an adventurers hat"/>
        </button>
        </div>

     );
}
 
export default Hats;