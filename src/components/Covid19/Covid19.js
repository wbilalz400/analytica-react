import React from 'react'

import CountryPicker from '../CountryPicker/CountryPicker';
import Card from '../Card/Card';
import Chart from '../Charts/Chart';
import styles from './Covid19.module.css'
import {fetchData} from '../../api';


class Covid19 extends React.Component{

    async componentDidMount (){
        const data = await fetchData();
        
        console.log(data);
    }
    render(){
        return(
        <div className={styles.container}>
                <h1>Covid19</h1>
                <CountryPicker/>
                <CountryPicker/>
        </div>
        )
    }
}
export default Covid19