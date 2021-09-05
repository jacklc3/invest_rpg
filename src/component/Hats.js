import React from "react";
import "./Hats.css";

export default class Hats extends React.Component {
  constructor(props) {
    super(props);

    const r = require.context('./img/avatar/hat', false, /\.png$/);

    this.displays = {};
    r.keys().forEach(k => this.displays[k.replace("./", "").split(".")[0]] = r(k));

    this.state = {display: Object.keys(this.displays)[0]};
  }

  render() {
    return (
      <div className="component-hats">
        <img src={ this.displays[this.props.outfit].default } alt="an adventurers hat"/>
      </div>
    );
  }
}