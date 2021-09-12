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

    this.displays = {};
    r[props.outfit].keys().forEach(k => this.displays[k.replace("./", "").split(".")[0]] = r[props.outfit](k));
    this.state = {display: Object.keys(this.displays)[0]};
  }

  render() {
    const className = [this.props.outfit, this.props.instance].join(' ');

    return (
      <div className="component-outfit">
        <img
          className={className}
          src={this.displays[this.props.instance].default}
          alt="an adventurers outfit" />
      </div>
    );
  }
}