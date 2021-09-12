import React from "react";
import "./AvatarBlock.css";
import Outfit from './Outfit';

export default class AvatarBlock extends React.Component {
  render() {
    return (
      <div className="component-avatarblock">
        <div className="component-avataranchor"> 
          <div className="component-avatar"></div>
          <Outfit
            outfit="hat"
            instance={this.props.outfit.hat} />
          <Outfit
            outfit="boots"
            instance={this.props.outfit.boots} />
          <Outfit
            outfit="aura"
            instance={this.props.outfit.aura} />
        </div>
      </div>
    );
  }
}