import React, { Component } from "react";
import "./styles.css";
import Logo from "./logo";
import NavItem from "./navItem";
import Profile from "./profile";
import Search from "./search";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <div className={"navItem-wrapper"}>
          <NavItem
            label={"FEED"}
            url={
              "https://cdn.iconscout.com/icon/premium/png-256-thumb/rss-feed-2089704-1775621.png"
            }
          />
          <NavItem
            label={"NETWORKS"}
            url={"https://image.flaticon.com/icons/svg/1500/1500455.svg"}
          />
          <NavItem
            label={"JOBS"}
            url={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRj1gR686XIO-yOrXYF2GRmHkqd0gb217HpWQ&usqp=CAU"
            }
          />
          <NavItem
            label={"CHATS"}
            url={"https://image.flaticon.com/icons/svg/876/876221.svg"}
          />
          <NavItem
            label={"NOTICES"}
            url={
              "https://cdn.iconscout.com/icon/premium/png-512-thumb/notification-bell-1736872-1478467.png"
            }
          />
        </div>
        <Search />
        <Profile />
        <NavItem
          label={"OTHER"}
          url={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Maya_3.svg/900px-Maya_3.svg.png"
          }
        />
      </div>
    );
  }
}

export default Navbar;
