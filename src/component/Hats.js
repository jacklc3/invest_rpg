import "./Hats.css";
import { useState } from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images);
    return images;
  }

//   ---need to do this but using the effect hook----
//   function countReset(count,arr, update) {
//       if (count === arr.length) {
            // initialCount = 0;
//           console.log('count is reset')
//       } 
//   }
  
  const images = importAll(require.context('./img/hats', false, /\.(png|jpe?g|svg)$/));
  
//   <img src={images['doggy.png']}

const Hats = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const hatsArr = ["archerHat", "bowlerHat", "catEars", "crown", "headphones", "jesterHat", "magicianHat", "purplePartyHat", "fedora", "halo"];
    return ( 
        <div className="hats">
        <p>hello there { hatsArr[count] }</p>
        <div className="hats-dash">
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
        <img src={ images[hatsArr[count]+'.png'].default } alt="an adventurers hat"/>
        </div>

     );
}
 
export default Hats;