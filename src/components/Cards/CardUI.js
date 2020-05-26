import React from 'react'
import img1 from '../../assets/images/IMG_9169.JPG'

const CardUI = props => {
    return (
        <div className="card text-center">
            <div className="overflow" >
                <img src={img1} alt=""  className="card-img-top"/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Watch Video</h4>
                <p className='card-text text-secondary'>
                    Get Started!
                    Create your own Dashboard, Add Widgets And Wallah!
                </p>
                <a href='#' className="btn btn-outline-success">Open on Youtube</a>
            </div>
        </div>
    )
}
export default CardUI;