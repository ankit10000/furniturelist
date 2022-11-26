import React from 'react'
import Pic3 from '../../img/13-2-chair-free-download-png.png';
import { Link } from 'react-router-dom';

export default function Container4() {
  return (
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
  )
}
