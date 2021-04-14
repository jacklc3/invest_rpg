import React from "react";
import "./IconBlock.css";

const icon_map = {
  pig: "Savings",
  bonsai: "Financial Indep.",
  gem: "Retirement Fund",
  shield: "Risk Mangement",
  ruby: "Rainy Day"
}

export default class IconBlock extends React.Component {
  constructor(props) {
    super(props);

    const r = require.context('./img/icon', false, /\.png$/);

    var images = {};
    r.keys().forEach(key => (images[key.replace("./", "").split(".")[0]] = r(key)))

    this.nodes = Object.keys(icon_map).map(key => (
      <div key={key} className="icon-section">
        <div className="icon-anchor">
          <img src={ images[key].default } alt="an icon" className="icon-image"/>
        </div>
        <div className="icon-name">{icon_map[key]}</div>
        <div className="icon-value">2000</div>
      </div>
    ))
  }

  render() {
    return (
      <div className="component-iconblock">{this.nodes}</div>
    );
  }
}