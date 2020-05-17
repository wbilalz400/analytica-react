import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const styles = {
    leftPane : {
        height:'100vh', 
        background: "rgb(2,0,36)" ,
        background:' linear-gradient(171deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    card : {
        marginRight: '25%', 
        marginLeft: '25%',
        background: 'white',
        border: '5px',
        borderColor: 'white',
        borderRadius : '20px',
        height: '60%',
        boxShadow: "10px 10px 16px -5px rgba(0,0,0,0.75)"

    }
}
 

export default class LoginView extends React.Component {

    // Aamir was here

    render() {

        return (
            <div>
            <Row>
            <Col style={styles.leftPane}>
                <Container style={styles.card}>
                
                </Container>
            </Col>
            <Col>2 of 2</Col>
            </Row>
            </div>
        );
    }
}