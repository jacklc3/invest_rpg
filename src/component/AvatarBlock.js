import React from "react";
import "./AvatarBlock.css";
import Hats from './Hats';

export default class AvatarBlock extends React.Component {
  render() {
    return (
      <div className="component-avatarblock">
        <div className="component-avataranchor"> 
          <div className="component-avatar"></div>
          <Hats outfit={this.props.outfit.hat}/>
        </div>
      </div>
    );
  }
}