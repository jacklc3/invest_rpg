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
   
    //something like this. only problem now is it's not picking up the function change in render...
    const nextHat = () => {
      setCount(prevCount => prevCount + 1);
     }
  
     const initialHat = () => {
      setCount(initialCount);
     }
  
     let hatButton = nextHat;
    
    useEffect(() => {
      switch (count) {
        default: hatButton = initialHat;
        break;
      }
      console.log(hatButton);
    });
    
    return ( 
        <div className="hats">
        <button onClick={ hatButton }>
          <img src={ images[hatsArr[count]+'.png'].default } alt="an adventurers hat"/>
        </button>
        </div>

     );
}
 
export default Hats;