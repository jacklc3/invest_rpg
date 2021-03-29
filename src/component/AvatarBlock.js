import React from "react";
import "./AvatarBlock.css";
import { useState } from 'react';
import Hats from './Hats';

let count = 1;

export default class AvatarBlock extends React.Component {


  render() {
    return (
      <div class="component-avatarblock">
        <div class="component-avataranchor"> 
          <div class="component-avatar"></div>
          <Hats />
        </div>
      </div>
    );
  }
}