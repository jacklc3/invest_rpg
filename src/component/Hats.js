import React from "react";
import "./Hats.css";

export default class Hats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {i: 0};

    const r = require.context('./img/hats', false, /\.png$/);
    // Not in use yet but should be very useful later
    this.keys = r.keys().map(key => key.replace("./", "").split(".")[0]);
    this.images = r.keys().map(key => r(key));
  }

  handleClick() {
    if (this.state.i >= this.images.length - 1) {
      this.setState({i: 0});
    } else {
      this.setState(state => ({i: state.i + 1}));
    }
  }

  render() {
    return ( 
      <div className="hats">
        <button onClick={ this.handleClick.bind(this) }>
          <img src={ this.images[this.state.i].default } alt="an adventurers hat"/>
        </button>
      </div>
    );
  }
}