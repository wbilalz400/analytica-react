import React from 'react'
import logo from '../images/light-logo.png'
import user from '../images/user.png'
import light from '../images/thunder.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';


function Navbar() {
    return (
            <Row className='row'>
                <Col className='col1'>
                
                   <h1><img width='200px' src={logo}></img>
                    </h1>
            
                    <img className='img1' src={light}/>
                  
                </Col>
                <Col className='col2'>
                    <ul>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Pricing</a></li>
                        <li><a href=''>Dashboards</a></li>
                        <li><a href=''>Resources</a></li>
                        <li><a href=''>Platforms</a></li>
                    </ul>
                </Col>
                <Col className='col3'>
                <button>Demo</button>
                <a><img src={user}></img></a>
                
                </Col>
           </Row>

            
           
            
           
            
           
            
          
            
        
    )
}
export default Navbar;
