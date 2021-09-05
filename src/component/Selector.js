import React from "react";
import "./Selector.css";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    const r = require.context('./img/avatar/hat', false, /\.png$/);
    this.rows = r.keys().map(k => {
      const name = k.replace("./", "").split(".")[0];
      return (
        <img
          src={ r(k).default }
          alt=""
          onClick={ () => this.props.callback(name) }
          key={ name }/>
      );
    });

    if (props.outfit !== "hat") {
      this.rows = [];
    }
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