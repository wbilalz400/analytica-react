import React from 'react'
import logo from '../images/light-logo.png'
import user from '../images/user.png'
import light from '../images/thunder.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import './NavBar.css';


export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            headerBackground: false
        };
        this.handleScroll = () => {
            let scrollY = window.pageYOffset;
            if (scrollY > window.innerHeight) {
                this.setState({headerBackground : true});
            } else {
                this.setState({headerBackground : false});
    
            }
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
      }
    
    render() {
    return (
            <div className={'NavBar ' + (this.state.headerBackground? "back" : '')}>
                
                
                <div className='SubHeader'>
                    
                </div>
                <div className='SubHeader'>
                <div className="Links">
                    <a href=''>About</a>
                </div>
                <div className="Links">
                    <a href=''>Pricing</a>
                </div>
                </div>

                <div className='SubHeader HeaderLogo'>
                
                   <h1><img width='200px' src={logo}></img>
                    </h1>
            
                  
                </div>
                <div className='SubHeader'>
                <div className="Links">
                    <a href=''>Resources</a>
                </div>
                <div className="Links">
                    <a href=''>Platforms</a>
                </div>
                </div>
                <div className='SubHeader'>
                <button>Demo</button>
                <a><img src={user} width='50px'></img></a>
                </div>

              
           </div>

            
           
            
           
            
           
            
          
            
        
    );
    }
}
