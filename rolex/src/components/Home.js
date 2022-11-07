import React from 'react';
import Pic1 from '../img/3-2-chair-transparent.png';
import Pic2 from '../img/4-2-chair-png.png';
import Pic3 from '../img/13-2-chair-free-download-png.png';
import Pic4 from '../img/pngwing.com.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="container1">
        <div className="outerboxdiv">
          <div className="boxdiv">
            Make Your Dream Space a Reality
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
      <div className="container2">
        <div className="box1"><Link to='#'>Facebook</Link> </div>
        <div className="box2"><Link to='#'>Instagram</Link> </div>
        <div className="box3"><Link to='#'>Twiter</Link> </div>
        <div className="box4"><Link to='#'>Google</Link> </div>
      </div>
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
                <img src={Pic4} alt="Loading" width='300px' height="330px" />
                <span>hello world</span>
              </div>
            </Link>
          </div>
          <div className="secondBox">
            <Link to="#"><div className="categ">a</div></Link>
            <Link to="#"><div className="categ">s</div></Link>
            <Link to="#"><div className="categ">d</div></Link>
            <Link to="#"><div className="categ">f</div></Link>
            <Link to="#"><div className="categ">g</div></Link>
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
                <img src={Pic2} alt="Loading" width='300px' height="330px" />
                <span>hello world</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container4">
        <div className="room">
          <Link to='#' className='l1'>Bad room</Link>
          <Link to='#' className='l2'>Living room</Link>
          <Link to='#' className='l3'>Dining room</Link>
        </div>
        <div className="content">
          <div className="box11">
            <img src={Pic3} alt="loading" height='600px' width="400px" />
          </div>
          <div className="box12">
            <div className="outerbox1">
              <div className="innerouterbox">
                <div className="innerbox2">
                  <img src={Pic3} alt="loading" height='250px' width="200px" />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi consectetur vel quisquam in, quia soluta eveniet quod laboriosam molestiae a doloremque libero quis nulla facilis rerum dignissimos non consequuntur.</div>
              </div>
              <div className="innerouterbox">
                <div className="innerbox3">
                  <img src={Pic3} alt="loading" height='250px' width="200px" />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi consectetur vel quisquam in, quia soluta eveniet quod laboriosam molestiae a doloremque libero quis nulla facilis rerum dignissimos non consequuntur.</div>
              </div>

            </div>
            <div className="outerbox2">
              <div className="innerouterbox">
                <div className="innerbox4">
                  <img src={Pic3} alt="loading" height='250px' width="200px" />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi consectetur vel quisquam in, quia soluta eveniet quod laboriosam molestiae a doloremque libero quis nulla facilis rerum dignissimos non consequuntur.</div>
              </div>
              <div className="innerouterbox">
                <div className="innerbox5">
                  <img src={Pic3} alt="loading" height='250px' width="200px" />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi consectetur vel quisquam in, quia soluta eveniet quod laboriosam molestiae a doloremque libero quis nulla facilis rerum dignissimos non consequuntur.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container5">
        
      </div>

    </>
  )
}
