import React from 'react';
import ProtectedView from './ProtectedView';
import './HomeView.css'
import logo from '../images/light-logo.png';
import userLogo from '../images/user-icon.svg';
import FormButton from '../components/FormButton'
import editLogo from '../images/edit-icon.svg';
import '../css/styles.css';
import '../css/styles1.css';
import { circle } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import leftArrowIcon from '../images/left-arrow-icon.svg';
import { faCircle, faArrowAltCircleLeft, faArrowAltCircleRight, faUserCircle, faArrowAltCircleDown, faEdit } from '@fortawesome/free-regular-svg-icons'
import { Collapse } from 'react-collapse';
import GridLayout from 'react-grid-layout';
import Chart from "react-apexcharts";


export default class extends React.Component {
    constructor() {
        super();
        this.state = { auth: false, collapse: false, r: 180 };

        this.logOut = () => {
            localStorage.removeItem("token");
            window.location.href = '/';
        }


        this.collapse = (collapseItem) => {
            let obj = {};
            obj[collapseItem] = !this.state[collapseItem];
            this.setState(obj);
        }
        this.loading = () => {
            this.interval = setInterval(() => {
                this.setState({ loading: !this.state.loading });
            }, 800);
        }
        this.stopLoading = () => {
            clearInterval(this.interval);
            this.setState({ loading: false })
        }
        this.loading();
        this.state = {
            layout: [
                {
                    x: 0,
                    y: 0,
                    h: 8,
                    w: 9,
                },
                {
                    x: 0,
                    y: 0,
                    h: 3,
                    w: 3,
                }
            ],
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.state.user = fetch("http://localhost:3001/login", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: localStorage.getItem("token"),
                })
            })
                .then(r => r.json())
                .then(data => {
                    if (data.status != "OK") {

                        window.location.href = '/login';
                    }
                    this.setState({ user: data.user, auth: true });


                })
                .catch(err => {
                    window.location.href = '/login';

                });
        } else {
            window.location.href = '/login';
        }
    }
    
    render() {
        if (!this.state.auth) {
            return (<div style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} className="HomeBody"><img src={logo} width='300' px></img></div>);
        }
        return (

            <div className={"HomeBody " + (this.state.sideBarCollapse ? "collapsed" : "")}>
                <div className="sideBar">
                    <div className="collapseBtn" onClick={() => this.setState({ sideBarCollapse: !this.state.sideBarCollapse })}>
                        <FontAwesomeIcon icon={this.state.collapse ? faArrowAltCircleRight : faArrowAltCircleLeft} size='2x' />
                        <p>Collapse</p>

                    </div>
                    <div className="personalInfo">
                        <img src={userLogo} width='80px'></img>
                        <h1> {this.state.user.name}</h1>
                        <FormButton color='orange' label="Sign Out" onClick={this.logOut} ></FormButton>
                    </div>
                    <div className="Menus">
                        <div className="MenuItem">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <h3>My Profile</h3>
                            <FontAwesomeIcon onClick={e => this.collapse('collapseProfile')} icon={faArrowAltCircleDown} rotation={this.state.collapseProfile ? 180 : 0}></FontAwesomeIcon>

                        </div>
                        <Collapse isOpened={this.state.collapseProfile}>
                            <div className='ChildItem'>
                                <FontAwesomeIcon icon={faEdit} />
                                <h3>Edit Profile</h3>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="main">
                    <div className="header">
                        <div className="subHeader "></div>
                        <div className="subHeader center"><img src={logo} width='200px' /></div>
                        <div className="subHeader right"></div>
                    </div>
                    <div style={{overflow:'scroll'}} className={"content " + (this.state.loading ? "" : "")}>
                        <div className={"dashboardMain"}>
                            <h1>Dashboard</h1>
                            <GridLayout onLayoutChange={layout => this.setState({layout: layout})} className="gridLayout" rowHeight={30} width={1000} cols={10}>
                                <div key="0" className="widgetCard" data-grid={this.state.layout[0]} > <Chart
                                    options={this.state.options}
                                    series={this.state.series}
                                    height={this.state.layout[0].h*30}
                                    type="bar" 
                                    width={this.state.layout[0].w*95}
                                /></div>
                                <div key="1" className="widgetCard" data-grid={this.state.layout[1]} > <Chart
                                    options={this.state.options}
                                    series={this.state.series}
                                    height={this.state.layout[1].h*30}
                                    type="line" 
                                    width={this.state.layout[1].w*95}
                                /></div>
                            </GridLayout>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}