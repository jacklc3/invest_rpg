import React from "react";
import "./AvatarBlock.css";



export default class AvatarBlock extends React.Component {
  const hatsArr = ["archerHat", "bowlerHat", "catEars", "crown", "headphones", "jesterHat", "magicianHat", "purplePartyHat", "fedora", "halo"];
  const hatButton = document.getElementById("avatar-hat");

  hatButton.addEventListener("click", function(event, arr) {
    if (i <= 0) {
        i = arr.length - 1;
    } else {
        i--;
    }
    hats = hatsArr[i];
    document.getElementById("avatar-hat").src = hats + ".png"; 
    document.getElementById("avatar-hat").alt = "picture of " + hats;
})

  render() {
    return (
      <div class="component-avatarblock">
        <div class="component-avataranchor"> 
          <div class="component-avatar"></div>
          <div id="avatar-hat" className="component-hat"></div>
        </div>
      </div>
    );
  }
}