import React from "react";
import "./Selector.css";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    const r = {
      hat: require.context('./img/avatar/hat', false, /\.png$/),
      item: require.context('./img/avatar/item', false, /\.png$/),
      aura: require.context('./img/avatar/aura', false, /\.png$/),
      boots: require.context('./img/avatar/boots', false, /\.png$/),
    }

    this.rows = r[props.outfit].keys().map(k => {
      const name = k.replace("./", "").split(".")[0];
      return (
        <img
          src={ r[props.outfit](k).default }
          alt=""
          onClick={ () => this.props.callback(name) }
          key={ name }/>
      );
    });
  }

  render() {
    return ( 
      <div className="component-selector">
        <div className="component-background" style={{background: this.props.style.background}}/>
        {this.rows}
      </div>
    );
  }
}