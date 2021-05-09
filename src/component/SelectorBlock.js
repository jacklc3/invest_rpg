import React from "react";
import "./SelectorBlock.css";

const outfit_map = {
  items: "yellow",
  auras: "turquoise",
  hats: "purple",
  boots: "brown",
};

export default class SelectorBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {outfit: Object.keys(outfit_map)[0]};
  }

  handleClick(v) {
    if (this.state.outfit !== v) {
      this.setState({outfit: v});
      console.log(v);
    }
  }

  render() {
    const bar_items = Object.keys(outfit_map).map( k => {
      return (
        <div key={k} onClick={ this.handleClick.bind(this, k) }>{ k.toUpperCase() }</div>
      );
    });

    const frame_items = Object.entries(outfit_map).map( ([k, v]) => {
      const _style = {
        background: v,
        display: this.state.outfit === k ? "inline" : "none"
      };

      return (
        <div className="component-selectorframe" style={_style} key={k}></div>
      )
    });

    return (
      <div className="component-selectorblock">
        <div className="component-selectorbar">{bar_items}</div>
        {frame_items}
      </div>
    );
  }
}