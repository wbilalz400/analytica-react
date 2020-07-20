import React from 'react';
import ProtectedView from './ProtectedView';
import './HomeView.css'
import logo from '../images/light-logo.png';
import barIcon from '../images/bar.png';
import radarIcon from '../images/radar.png';
import donutIcon from '../images/donut.png';
import lineIcon from '../images/line.png';

import userLogo from '../images/user-icon.svg';
import FormButton from '../components/FormButton'
import editLogo from '../images/edit-icon.svg';
import '../css/styles.css';
import '../css/styles1.css';
import { circle } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import leftArrowIcon from '../images/left-arrow-icon.svg';
import { faCircle,faTimesCircle, faArrowAltCircleLeft, faArrowAltCircleRight, faUserCircle, faArrowAltCircleDown, faEdit } from '@fortawesome/free-regular-svg-icons'
import { Collapse } from 'react-collapse';
import GridLayout from 'react-grid-layout';
import Chart from "react-apexcharts";
import DashboardView from './DashboardView.js';


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
        // this.loading = () => {
        //     this.interval = setInterval(() => {
        //         this.setState({ loading: !this.state.loading });
        //     }, 800);
        // }
        // this.stopLoading = () => {
        //     clearInterval(this.interval);
        //     this.setState({ loading: false })
        // }
        // this.loading();

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
            widgets: [
                {
                    id: '0',
                    type: 'chart',
                    chartOptions: {
                        type: 'bar',
                        options: {
                            chart: {
                                id: "basic-bar"
                            },
                            xaxis: {
                                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                            }
                        }
                    },
                    data: {
                        series: [
                            {
                                name: "series-1",
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }
                        ]
                    },
                    layout: {
                        i: '0',
                        x: 0,
                        y: 0,
                        h: 8,
                        w: 9,
                    }
                },
                {
                    id: '1',
                    type: 'chart',
                    chartOptions: {
                        type: 'bar',
                        options: {
                            chart: {
                                id: "basic-bar"
                            },
                            xaxis: {
                                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                            }
                        }
                    },
                    data: {
                        series: [
                            {
                                name: "series-1",
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }
                        ]
                    },
                    layout: {
                        i: '1',
                        x: 0,
                        y: 0,
                        h: 8,
                        w: 9,
                    }
                },
                {
                    id: '2',
                    type: 'chart',
                    chartOptions: {
                        type: 'bar',
                        options: {
                            chart: {
                                id: "basic-bar"
                            },
                            xaxis: {
                                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                            }
                        }
                    },
                    data: {
                        series: [
                            {
                                name: "series-1",
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }
                        ]
                    },
                    layout: {
                        i: '2',
                        x: 0,
                        y: 0,
                        h: 8,
                        w: 9,
                    }
                },
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
    generateChart = type => {
        let toR = {
            id: this.state.widgets.length.toString(),
            type: 'chart',
            chartOptions: {
                type: type,
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                }
            },
            data: {
                series: [
                    {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 70, 91]
                    }
                ]
            },
            layout: {
                i: this.state.widgets.length.toString(),
                x: 0,
                y: 0,
                h: 8,
                w: 9,
            }
        };
        if (type === "donut") toR.data.series = toR.data.series[0].data;
        return toR; 
    }
    addChart = type => {
        this.setState({widgets: [...this.state.widgets,this.generateChart(type)]});
    }
    
    updateLayout = layout => {
        let widgets = [...this.state.widgets];
        layout.forEach(lay => {
            let index = widgets.findIndex(o => o.id === lay.i);
            widgets[index].layout = lay;
        });
        this.setState({widgets:widgets});
        localStorage.setItem("dashboard",JSON.stringify(this.state.widgets));
    }
    componentDidMount() {
        if (localStorage.getItem("dashboard")) {
            let widgets = JSON.parse(localStorage.getItem("dashboard"));
            //this.setState({widgets:widgets});
        }
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
                    // window.location.href = '/login';

                });
        } else {
            // window.location.href = '/login';
        }
    }
    
    render() {
        if (!this.state.auth) {
            return (<div style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} className="HomeBody"><img src={logo} width='300' px></img></div>);
        }
        console.log("refresh state");

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
                       <DashboardView/>
                    </div>
                </div>
            </div>
        );

    }
}