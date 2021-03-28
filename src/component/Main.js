import React from "react";
import "./Main.css";

import TitleBlock from './TitleBlock'
import AvatarBlock from "./AvatarBlock";
import IconBlock from "./IconBlock";
import Separator from './Separator';

export default class Main extends React.Component {
  render() {
    return (
      <div class="component-main">
        <div class="section left">
          <TitleBlock />
          <Separator direction="vertical" position="200px" />
          <AvatarBlock />
          <Separator direction="vertical" position="616px" />
        </div>
        <Separator direction="horizontal" position="400px" />
        <div class="section middle"></div>
        <Separator direction="horizontal" position="70%" />
        <div class="section right">
          <IconBlock />
        </div>
      </div>
    );
  }
}