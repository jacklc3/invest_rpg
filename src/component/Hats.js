import "./Hats.css";
import { useState, useEffect } from 'react';

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
    
    useEffect(() => {
      switch (count) {
        case hatsArr.length -1: setCount(initialCount);
        break;
      }
    });

    // maybe a fix is.. to make two function that have a callback function of setCount. one with setCount(prevCount => prevCount + 1) and the other with setCount(initialCount). then set the onclick value of the button between these two to reset the count and display the last object in the array 
    
    return ( 
        <div className="hats">
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          <img src={ images[hatsArr[count]+'.png'].default } alt="an adventurers hat"/>
        </button>
        </div>

     );
}
 
export default Hats;