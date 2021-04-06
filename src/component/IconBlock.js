import React from "react";
import "./IconBlock.css";

function IconGenerator(name, symbol) {
    return {
        name: name,
        symbol: symbol,
        path: "img/icon/"+symbol+".png"
    };
}

const icons = [
    IconGenerator("Savings", "pig"),
    IconGenerator("Financial Indep.", "bonsai"),
    IconGenerator("Retirement Fund", "gem"),
    IconGenerator("Risk Management", "shield")
]

const rows = icons.map( icon => {
  const className = [
    "icon-image",
    icon.symbol
  ].join(" ");

  return (
    <div className="icon-section">
      <div className="icon-anchor">
        <div className={className}/>
      </div>
      <div className="icon-name">{icon.name}</div>
      <div className="icon-value">1000</div>
    </div>
  );
})

export default class IconBlock extends React.Component {
  render() {
    return (
      <div className="component-iconblock">{rows}</div>
    );
  }
}