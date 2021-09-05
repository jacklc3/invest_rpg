import React from "react";
import "./SelectorBlock.css";
import Selector from './Selector';

const outfit_map = {
  hat: "purple",
  item: "yellow",
  aura: "turquoise",
  boots: "brown",
};

export default class SelectorBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {outfit: Object.keys(outfit_map)[0]};
  }

  handleClick(v) {
    this.setState({outfit: v});
  }

  render() {
    const bar_items = Object.keys(this.props.callback).map( k => {
      return (
        <div key={k} onClick={ this.handleClick.bind(this, k) }>{ k.toUpperCase() }</div>
      );
    });

    const frame_items = Object.keys(this.props.callback).map( k => {
      return (
        this.state.outfit === k
          && <Selector
            callback={this.props.callback[k]}
            outfit={k}
            style={{background: outfit_map[k]}}
            key={k}/>
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