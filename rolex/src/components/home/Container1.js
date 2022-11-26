import React from 'react'
import Pic1 from '../../img/3-2-chair-transparent.png';
import Pic2 from '../../img/4-2-chair-png.png';
import Pic3 from '../../img/13-2-chair-free-download-png.png';
import Pic4 from '../../img/pngwing.com.png';
import { Link } from 'react-router-dom';

export default function Container1() {
  return (
    <div className="container1">
        <div className="outerboxdiv">
          <div className="boxdiv">
            {/* Make Your Dream Space a Reality */}
            Dreams Don't Work Unless You Take Action
          </div>
          <div className="picdivbox">
            <div className="innerbox">
              <img id='pic1' src={Pic1} width="150px" height="150px" alt="Loading" />
              <span><div id="coustome">Customize your wood furniture <Link to="#" id='boxlink'>Get Ideas</Link></div></span>
            </div>
            <div className="innerbox1">
              <img src={Pic2} id="pic2" width="110px" height="110px" alt="Loading" />
              <img src={Pic3} id='pic3' width="180px" height="300px" alt="Loading" />
            </div>
            <img src={Pic4} id='pic4' width="150px" height="150px" alt="Loading" />
          </div>
          <div className="btncontain">
            <Link to='#' id='shopbtn'>Shop Now</Link>
          </div>
        </div>
      </div>
  )
}
