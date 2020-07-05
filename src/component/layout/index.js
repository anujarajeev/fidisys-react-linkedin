import React, { Component } from 'react';
import NavBar from "./../navBar"
import Content from "./../content"
import Footer from '../footer';



class Layout extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <Content/>
            <Footer/>
            </div>
        );
    }
}

export default Layout;