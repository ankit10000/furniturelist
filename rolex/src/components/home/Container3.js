import React from 'react'
import Pic1 from '../../img/3-2-chair-transparent.png';
import Pic2 from '../../img/4-2-chair-png.png';
import Pic3 from '../../img/13-2-chair-free-download-png.png';
import Pic4 from '../../img/pngwing.com.png';
import { Link } from 'react-router-dom';

export default function Container3() {
  return (
    <div className="container3">
        <div className="outerheading">
          <div className="innerheading">
            Shop by Categories
          </div>
          <span>Start exploring by choosing any furniture categories</span>
        </div>
        <div className="review_furniture">
          <div className="firstBox">
            <Link to="#">
              <div className="box5">
                <img src={Pic1} alt="Loading" width='250px' height="300px" />
                <span>hello world</span>
              </div>
            </Link>
            <Link to="#">
              <div className="box6">
                <img src={Pic2} alt="Loading" width='250px' height="300px" />
                <span>hello world</span>
              </div>
            </Link>
            <Link to="#">
              <div className="box7">
                <img src={Pic4} alt="Loading" width='250px' height="330px" />
                <span>hello world</span>
              </div>
            </Link>
          </div>
          <div className="secondBox">
            <Link to="#" className='a'><div className="categ">Chair</div></Link>
            <Link to="#" className='a'><div className="categ">Tables</div></Link>
            <Link to="#" className='a'><div className="categ">Cabinates</div></Link>
            <Link to="#" className='a'><div className="categ">Desks</div></Link>
            <Link to="#" className='a'><div className="categ">Sofas</div></Link>
          </div>
          <div className="thiredBox">
            <Link to="#">
              <div className="box8">
                <img src={Pic3} alt="Loading" width='250px' height="300px" />
                <span>hello world</span>
              </div>
            </Link>
            <Link to="#">
              <div className="box9">
                <img src={Pic1} alt="Loading" width='250px' height="300px" />
                <span>hello world</span>
              </div>
            </Link>
            <Link to="#">
              <div className="box0">
                <img src={Pic2} alt="Loading" width='250px' height="330px" />
                <span>hello world</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}
