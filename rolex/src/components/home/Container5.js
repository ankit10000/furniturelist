import React from 'react'
import Pic3 from '../../img/13-2-chair-free-download-png.png';
import { Link } from 'react-router-dom';

export default function Container5() {
  return (
    <div className="container5">
        <div className="content">
          <div className="innercontainer">
            <Link to='#'><img src={Pic3} alt="loading" height='600px' width="400px" /></Link>

          </div>
          <div className="innercontainer1">
            <div className='tell'>Why us?</div>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            <div className="li">
              <li>Risk-free, 30-day return policy</li>
              <li>Honest prize without retail overheads</li>
              <li>Warranty and in-house protection plan by Neo Livin</li>
              <li>From curated brands and manufactures</li>
            </div>
            <div className="btnsell">
              <Link to='#'>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
  )
}
