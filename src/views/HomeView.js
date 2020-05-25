import React from 'react';
import ProtectedView from './ProtectedView';
import './HomeView.css'
import logo from '../images/light-logo.png';
export default class extends ProtectedView {
    constructor() {
        super();
        this.state = {
        }
    }
  
    render() {
        return (
            <div className="HomeBody">
                <div className="sideBar">
                   <div className="personalInfo">
                       Welcome, User
                   </div>
                </div>
                <div className="main">
                    <div className="header">
                        <div className="subHeader "></div>
                        <div className="subHeader center"><img src={logo} width ='200px'/></div>
                        <div className="subHeader right"></div>
                    </div>
                    <div className="content">

                    </div>
                </div>
            </div>
        );

    }
}