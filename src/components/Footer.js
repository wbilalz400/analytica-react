import React from 'react'
import styles from './Footer.css'

function Footer() {
    return (
        <div className='mainfooter'>
           
            <div className='container'>
                <div className='row'>
                   
                    {/*Column1*/}
                   
                    <div className='col-md-3 col-sm-6'>
                    <h6 className='mts'>FOR PR PROS </h6>
                        <ul className='list-unstyled'>
                        <a href=''><li>Overview</li></a>
                        <a href=''><li>Media Database</li></a>
                        <a href=''><li>Monitoring and Alerts</li></a>
                        <a href=''><li>Pitching</li></a>
                        <a href=''><li>Collaboration</li></a>
                        <a href=''><li>Reporting and Measurement</li></a>
                        </ul>
                    </div>
                    {/*Column2*/}
                   
                    <div className='col-md-3 col-sm-6'>
                    <h6>RESOURCES</h6>
                        <ul className='list-unstyled'>
                            <a href=''><li>Use Cases</li></a>
                            <a href=''><li>Webinars</li></a>
                            <a href=''><li>Guides and Demos</li></a>
                            <a href=''><li>Research</li></a>
                            <a href=''><li>Blog</li></a>
                            <a href=''><li>Trends</li></a>
                        </ul>
                    </div>
                    {/*Column3*/}
                   
                    <div className='col-md-3 col-sm-6'>
                    <h6>COMPANY</h6>
                        <ul className='list-unstyled'>
                            <a href=''><li>About</li></a>
                            <a href=''><li>Staff</li></a>
                            <a href=''><li>Careers</li></a>
                        </ul>
                    </div>
                    {/*Column*/}
                   
                    <div className='col-md-3 col-sm-6'>
                    <h6>CONTACT US</h6>
                        <ul className='list-unstyled'>
                            <li><a href=''>Feedback/Support</a></li>
                            <a href=''><li>analyticaiot.com</li></a>
                            <a href=''><li>Twitter</li></a>
                            <a href=''><li>Facebook</li></a>
                            <a href=''><li>21343</li></a>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                   
                    {/*Column1*/}
                   
                    <div className='col-md-3 col-sm-6'>
                        <div className='footer-bottom'>
                            <p className='pl'>
                               Private Policy . Terms {'&'} Conditions
                            </p>

                        </div>
                   
                       
                    </div>
                    {/*Column2*/}
                   
                    <div className='col-md-3 col-sm-6'></div>
                  
                   {/*Column2*/}
                   
                   <div className='col-md-3 col-sm-6'></div>
                  
                   {/*Column2*/}
                   
                   <div className='col-md-3 col-sm-6'>
                        <div className='footer-bottom'>
                            <p className='pr'>
                                &copy; {new Date().getFullYear()} Analytica.IoT . All Rights Reserved
                            </p>

                        </div>
                        
                   
                       
                    </div>
                  
                </div>
                
            </div> 
            
        </div>
    )
}
export default Footer