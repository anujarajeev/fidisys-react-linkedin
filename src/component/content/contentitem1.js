import React, { Component } from 'react';
import "./styles.css"

class ContentItem1 extends Component {
    render() {
        let {title,para,url}=this.props

        return (
            <div className="contentWrapper1">
                <h2>{title}</h2>
                <p>{para}</p>
                <img src={url}/>
            </div>
        );
    }
}

export default ContentItem1;