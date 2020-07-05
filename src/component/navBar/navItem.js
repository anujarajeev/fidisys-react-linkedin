import React, { Component } from 'react';
import "./styles.css"


class NavItem extends Component {
    render() {
        let {label,url}=this.props
        return (
            <div className="navItemContainer">
              <img src={url}/>
                  {label}
            </div>
        );
    }
}

export default NavItem;