import React from 'react'
import './Carousel.css'

const image = require('../../images/logo.png');

const Carousel = () => {
  return (
    <div className='carousel-container-container'>
    <div className="carousel-container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
            <div className="item active">
                <img src={image}/>
            </div>

            <div className="item">
                <img src={image}/>
            </div>
            
            <div className="item">
                <img src={image}/>
            </div>
            </div>

            <a className="carousel-control left-control control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control right-control control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Carousel