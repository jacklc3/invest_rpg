import React from "react";
import "./Main.css";

import TitleBlock from './TitleBlock'
import AvatarBlock from "./AvatarBlock";
import IconBlock from "./IconBlock";
import Separator from './Separator';
import SelectorBlock from './SelectorBlock';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      hat: "archerHat",
      aura: "",
      boots: "",
    };

    this.callback = {
      hat: v => this.setState({hat: v}),
      item: v => this.setState({item: v}),
      aura: v => this.setState({aura: v}),
      boots: v => this.setState({boots: v})
    }
  }

  render() {

    console.log(this.state);
    return (
      <div className="component-main">
        <div className="section left">
          <TitleBlock />
          <Separator direction="vertical" position="200px" />
          <AvatarBlock outfit={{
            hat: this.state.hat,
            item: this.state.item,
            aura: this.state.aura,
            boots: this.state.boots}} />
          <Separator direction="vertical" position="616px" />
          <SelectorBlock callback={this.callback}/>
        </div>
        <Separator direction="horizontal" position="400px" />
        <div className="section middle"></div>
        <Separator direction="horizontal" position="70%" />
        <div className="section right">
          <IconBlock />
        </div>
      </div>
    );
  }
}