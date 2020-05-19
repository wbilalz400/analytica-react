import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import FormField from '../components/FormField'
import FormButton from '../components/FormButton';
import './LoginView.css';
const styles = {
    leftPane : {
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
        boxShadow: "10px 10px 16px -5px rgba(0,0,0,0.75)",
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column'

    },
    Row : {
        height :"100%"
    }
}
 

export default class LoginView extends React.Component {

    // Aamir was here
    constructor() {
        super();
        this.state = {
            email: '',
            pass: '',
            errEmail: false,
            errPass: false,
        }
        this.doLogin = () => {
            console.log("Login Called");
        }
    }
    
    render() {
        this.fieldChange = (e) => {
            var field = e.target.name;
            if (e.target.name == 'email') {
                
                this.setState({email: e.target.value});
        
            } else {
                this.setState({pass: e.target.value});

            }
        }
        return (
            <div class= 'body'>
            <Row style = {styles.Row}>
            <Col style={styles.leftPane}>
                <Container style={styles.card}>
                    <FormField label="Email"  err={this.state.errEmail} name = "email" type="email" onChange = {this.fieldChange} errLabel="Please enter email" placeholder="abc@xyz.com"/>
                    <FormField label="Password" err={this.state.errPass} name="pass" type="password" onChange = {this.fieldChange} errLabel="Please enter password" />
                    <FormButton color="blue" label="Login" onClick={this.doLogin} />
                </Container>
            </Col>
            <Col className="rightCol">
                <div className='rightPane'>
                <h1>Login</h1>
                <h2>Enter your email and password to login and access you analytics!</h2>
                <p>Not a user? <a href='#register'>Register today</a></p>
                </div>
            </Col>
            </Row>
            </div>
        );
    }
}