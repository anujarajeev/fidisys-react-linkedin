import React, { Component } from 'react';
import "./styles.css"

class ContentItem extends Component {
    render() {
        let{title,footer,children}= this.props
        return (
            <div className="card-container">
                <h2>{title}</h2>
                {children}
                <div className={"card-footer"}>{footer}</div>
            </div>
        );
    }
}

export default ContentItem;