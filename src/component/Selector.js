import React from "react";
import "./Selector.css";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.background = props.style.background;

    const r = require.context('./img/avatar/hats', false, /\.png$/);
    this.rows = r.keys().map(k => {
      const name = k.replace("./", "").split(".")[0];

      return (
        <img src={ r(k).default } alt="" onClick={ this.handleClick.bind(this, name) } key={ name }/>
      );

    });
    if (props.outfit !== "hats") {
      this.rows = [];
    }
  }

  handleClick(name) {
    console.log(name);
  }

  render() {
    return ( 
      <div className="component-selector">
        <div className="component-background" style={{background: this.background}}/>
        {this.rows}
      </div>
    );
  }
}