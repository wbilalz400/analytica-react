import React from 'react';
import "./FormButton.css";
import loader from "../images/loading-circle-blue.svg";
export default class FormButton extends React.Component {
    render() {
        return (
            <div className={"btn-custom " + this.props.color } onClick={this.props.onClick}>
                <img className = {this.props.loading?"loading":""} src={loader}></img><span>{this.props.label}</span>
            </div>
        );
    }
}