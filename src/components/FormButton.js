import React from 'react';
import "./FormButton.css";

export default class FormButton extends React.Component {
    render() {
        return (
            <div className={"btn-custom " + this.props.color } onClick={this.props.onClick}>
                {this.props.label}
            </div>
        );
    }
}