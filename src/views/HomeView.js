import React from 'react';
import ProtectedView from './ProtectedView';
import './HomeView.css'
import logo from '../images/light-logo.png';
import userLogo from '../images/user-icon.svg';
import FormButton from '../components/FormButton'
import editLogo from '../images/edit-icon.svg';
import {circle} from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import leftArrowIcon from '../images/left-arrow-icon.svg';
import { faCircle, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

export default class extends React.Component {
    constructor() {
        super();
        this.state = {auth : false,collapse:false};
         
        this.logOut = () => {
            localStorage.removeItem("token");
            window.location.href = '/';
        }

        this.collapse = () => {
            this.setState({collapse: !this.state.collapse});
            this.stopLoading();
        }
        this.loading = () => {
            this.interval = setInterval(() => {
                this.setState({loading:!this.state.loading});
            }, 800);
        }
        this.stopLoading = () => {
            clearInterval(this.interval);
            this.setState({loading: false})
        }
        this.loading();
    }
    
    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.state.user = fetch("http://localhost:3001/login",{method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                token: localStorage.getItem("token"),
            })
            })
            .then(r => r.json())
            .then(data => {
                if (data.status != "OK") {
                    
                    window.location.href = '/login';
                }
                this.setState({user: data.user,auth:true});
                

            })
            .catch(err => {
                window.location.href = '/login';

            });
        } else {
            window.location.href='/login';
        }
    }
   
    render() {
        if (!this.state.auth) {
            return ( <div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} className="HomeBody"><img src={logo} width='300'px></img></div>);
        }
        return (
            
            <div className={"HomeBody " + (this.state.collapse? "collapsed": "")}>
                <div className="sideBar">
                   <div className="collapseBtn" onClick={this.collapse}>
                        <FontAwesomeIcon icon={this.state.collapse?faArrowAltCircleRight: faArrowAltCircleLeft} size='2x'/>
                       <p>Collapse</p>

                   </div>
                   <div className="personalInfo">
                       <img src={userLogo} width = '80px'></img>
                       <h1> {this.state.user.name}</h1>
                        <FormButton color='orange' label="Sign Out" onClick={this.logOut} ></FormButton>
                   </div>
                </div>
                <div className="main">
                    <div className="header">
                        <div className="subHeader "></div>
                        <div className="subHeader center"><img src={logo} width ='200px'/></div>
                        <div className="subHeader right"></div>
                    </div>
                    <div className={"content " + (this.state.loading? "loading": "")}>
                        
                    </div>
                </div>
            </div>
        );

    }
}