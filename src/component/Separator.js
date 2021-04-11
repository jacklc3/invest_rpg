import React from "react";
import "./Separator.css";

export default class Separator extends React.Component {
  constructor(props) {
    super(props);

    this.className = [
      "component-separator",
      this.props.direction
    ].join(" ");
    
    this.style = {}
    if (this.props.direction === "vertical") {
      this.style.top = this.props.position;
    } else {
      this.style.left = this.props.position;
    }
  }

  render() {
    return (
      <div className={this.className} style={this.style} />
    );
  }
}