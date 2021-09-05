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
            instance={this.props.outfit.hat}
            style={{top: "-162px", left: "-40px"}}/>
          <Outfit
            outfit="boots"
            instance={this.props.outfit.boots}
            style={{top: "100px", left: "-60px", width: "120px"}}/>
          <Outfit
              outfit="aura"
              instance={this.props.outfit.aura}
              style={{top: "-225px", left: "-245px", width: "500px"}}/>
        </div>
      </div>
    );
  }
}