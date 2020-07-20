import React, {Component} from 'react';
import './DashboardView.css';
import GridLayout from 'react-grid-layout';
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faTimesCircle, faArrowAltCircleLeft, faArrowAltCircleRight, faUserCircle, faArrowAltCircleDown, faEdit } from '@fortawesome/free-regular-svg-icons'
import barIcon from '../images/bar.png';
import radarIcon from '../images/radar.png';
import donutIcon from '../images/donut.png';
import lineIcon from '../images/line.png';
import Thermometer from 'react-thermometer-component'

export default class DashboardView extends React.Component {
    constructor() {
        super();
        this.state = {
            widgets: []
        };
    }
    componentDidMount() {
        if (localStorage.getItem("dashboard")) {
            let widgets = JSON.parse(localStorage.getItem("dashboard"));
            this.setState({widgets:widgets});
        }
    }
    addChart = type => {
        this.setState({widgets: [...this.state.widgets,this.generateChart(type)]});
    }
    
    updateLayout = layout => {
        let widgets = [...this.state.widgets];
        layout.forEach(lay => {
            let index = widgets.findIndex(o => o.id === lay.i);
            if (index !== -1) widgets[index].layout = lay;
        });
        this.setState({widgets:widgets});
        localStorage.setItem("dashboard",JSON.stringify(this.state.widgets));
    }
    generateChart = type => {
        let allIds = this.state.widgets.map(w => parseInt(w.id));
        let newId = Math.max.apply(null,allIds) + 1;
        if (allIds.length == 0) newId = 0;

        let toR = {
            id: newId.toString(),
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
                i: newId.toString(),
                x: 0,
                y: 0,
                h: 8,
                w: 9,
            }
        };
        if (type === "donut") toR.data.series = toR.data.series[0].data;
        return toR; 
    }
    addThermometer = () => {
        let allIds = this.state.widgets.map(w => parseInt(w.id));
        let newId = Math.max.apply(null,allIds) + 1;
        if (allIds.length == 0) newId = 0;
        let toAdd ={
            id: newId.toString(),
            type: 'thermometer',
            layout : {
                i: newId.toString(),
                x: 0,
                y: 0,
                w:1,
                h:5,
                minH: 5,
            }

        }
        this.setState({widgets:[...this.state.widgets,toAdd]})
    }
    render() {
        console.log(this.state.widgets);
        return  <div className={"dashboardMain"}>
        <h1>Information at a glance</h1>

        <GridLayout onLayoutChange={this.updateLayout} className="gridLayout" rowHeight={30} width={1000} cols={10}>
            {this.state.widgets.map(element => <div className="widgetCard" key={element.id} data-grid={element.layout}>
                {element.type === "chart"?
                <Chart 
                    options={element.chartOptions.options}
                    series={element.data.series}
                    height={element.layout.h*30}
                    width={element.layout.w*95}
                    type={element.chartOptions.type}
                />
                :element.type === 'thermometer'? <Thermometer height={element.layout.h*30} />
                :<div/>}
                <div className="exitBtn2" onClick={() => this.setState({widgets:[...this.state.widgets.filter(w => w.id !== element.id)]})}>
                <FontAwesomeIcon
                icon={faTimesCircle}
                size="1x"
                style={{color:'white'}}
                />
            </div>
            </div>
            )}
        </GridLayout>
        <div onClick={()=>this.setState({modal:true})} className="addIcon">
            <span >+</span>
        </div>
        <div className={`blurModal ${this.state.modal?"show":""}`}>

            <div className={`ModalContent`}>
            <div className="exitBtn" onClick={() => this.setState({modal:false})}>
                <FontAwesomeIcon
                icon={faTimesCircle}
                size="2x"
                style={{color:'white'}}
                />
            </div>
                <h1 style={{marginTop:"20px"}}>Widgets</h1>
                <div className="WidgetContainer">
                    <div className="widgetOption" onClick={() => {this.addChart("bar");this.setState({modal:false})}}>
                        <img src={barIcon}/>
                        <h3>Bar Graph</h3>
                        <p>A bar graph to show different distinction of groups</p>
                    </div>
                    <div className="widgetOption" onClick={() => {this.addChart("radar");this.setState({modal:false})}}>
                        <img src={radarIcon}/>
                        <h3>Radar Graph</h3>
                        <p>A radar graph to show different distinction of groups</p>
                    </div>
                    <div className="widgetOption" onClick={() => {this.addChart("donut");this.setState({modal:false})}}>
                        <img src={donutIcon}/>
                        <h3>Pie Chart</h3>
                        <p>A pie chart to show different distinction of groups</p>
                    </div>
                    <div className="widgetOption" onClick={() => {this.addChart("line");this.setState({modal:false})}}>
                        <img src={lineIcon}/>
                        <h3>Line Graph</h3>
                        <p>A line graph to show different distinction of groups</p>
                    </div>
                    <div className="widgetOption" onClick={() => {this.addThermometer();this.setState({modal:false})}}>
                        <img src={lineIcon}/>
                        <h3>Thermometer</h3>
                        <p>A line graph to show different distinction of groups</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    }
}