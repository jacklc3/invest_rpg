import React from "react";
import "./Outfit.css";

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);

    const r = {
      hat: require.context('./img/avatar/hat', false, /\.png$/),
      item: require.context('./img/avatar/item', false, /\.png$/),
      aura: require.context('./img/avatar/aura', false, /\.png$/),
      boots: require.context('./img/avatar/boots', false, /\.png$/),
    }

    console.log(props)

    this.displays = {};
    r[props.outfit].keys().forEach(k => this.displays[k.replace("./", "").split(".")[0]] = r[props.outfit](k));
    this.state = {display: Object.keys(this.displays)[0]};
  }

  render() {
    console.log(this.props )
    return (
      <div className="component-outfit">
        <img
          src={ this.displays[this.props.instance].default }
          alt="an adventurers outfit"
          style={this.props.style}/>
      </div>
    );
  }
}