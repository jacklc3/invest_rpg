import React from "react";
import "./Main.css";

import TitleBlock from './TitleBlock'
import AvatarBlock from "./AvatarBlock";
import IconBlock from "./IconBlock";
import Separator from './Separator';
import SelectorBlock from './SelectorBlock';

export default class Main extends React.Component {
  render() {
    return (
      <div className="component-main">
        <div className="section left">
          <TitleBlock />
          <Separator direction="vertical" position="200px" />
          <AvatarBlock />
          <Separator direction="vertical" position="616px" />
          <SelectorBlock />
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