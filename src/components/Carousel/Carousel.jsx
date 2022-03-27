import React, { useState } from 'react';

import mainImg from '../../images/Shoplo-cover-NNWF.png';
import secondImg from '../../images/niezbednik_mockup.png';
import thirdImg from '../../images/NNWF-29-30.png';
import fourthImg from '../../images/NNWF-264-265.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const Carousel = () => {
    const images = [
         {id:0,
         img: mainImg}, 
         {id:1,
         img:secondImg},
         {id:2,
         img: thirdImg},
         {id:3,
         img:fourthImg}];

    const [currImg, setCurrImg] = useState(0);

    return ( 
    <div className="carousel">
      <div
       className="carouselInner"
       style={{ backgroundImage: `url(${images[currImg].img})` }}>
      
        <div
        className="left"
        onClick={() => {currImg > 0 && setCurrImg(currImg - 1);}}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        </div>
        <div
        className="right"
        onClick={() => {currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
        <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      </div>
    </div> 
    );
}
 
export default Carousel;
