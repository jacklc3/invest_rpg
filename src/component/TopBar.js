import React from "react";
import "./TopBar.css";

const links = [
  {name: "Twitter", url: "http://twitter.com"},
  {name: "Patreon", url: "http://patreon.com"},
  {name: "Discord", url: "http://discord.com"},
  {name: "Reddit", url: "http://reddit.com"}
];

const rows = links.map( link => {
  return (
    <div key={link.name.toLowerCase()}>
      <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
    </div>
  );
});

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="component-topbar">{rows}</div>
    );
  }
}