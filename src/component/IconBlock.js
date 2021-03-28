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
    <div class="icon-section">
      <div class="icon-anchor">
        <div class={className}/>
      </div>
      <div class="icon-name">{icon.name}</div>
      <div class="icon-value">1000</div>
    </div>
  );
})

export default class IconBlock extends React.Component {
  render() {
    return (
      <div class="component-iconblock">{rows}</div>
    );
  }
}