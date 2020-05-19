import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import './FormField.css';

const styles = {
    Col: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1% 12%'
    },
    label: {

    },
    input: {
        marginTop: '-3%',
        border: '0px',
    },
    errLabel : {
        color: 'red',
        fontSize: '0.8em'
    },

}
export default class FormField extends React.Component {
    
    render() {
        return (
            <Row x style ={styles.Col}>
                <label style={styles.label}>
                    {this.props.label}
                </label>
                <input className='input-field'  type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange} >

                </input>
                <label style={styles.errLabel}>
                    {this.props.err? this.props.errLabel: ""}
                </label>
            </Row>
        );
    }
}