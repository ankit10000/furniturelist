import React from 'react'
import logo from '../img/1.png'
import logo1 from '../img/2.png'
import {
    Link
} from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className='container1'>
            <div className="nav">
                <ul><li><Link className="a2" to="/">{props.title}</Link></li></ul>
            </div>
            <div className="navspace">
                <div className="nav">
                    <ul><li><Link className="a1" to="/about">About Us</Link></li></ul>
                </div>
                <div className="nav">
                    <ul><li><Link className="a1" aria-current="page" to="/furniture">Furniture</Link></li></ul>
                </div>
                <div className="nav">
                    <ul><li><Link className="a1" to="/store">Our Store</Link></li></ul>
                </div>
                <div className="nav">
                    <ul><li><Link className="a1" to="/collection">Collection</Link></li></ul>
                </div>
            </div>

            <div className="nav2">
                <img src={logo} alt="Loading" height="28px" width="28px" />
                <input type="text" placeholder="Search" autoComplete='NO' />
                <div class="vl"></div>
                <Link to="#">
                <img id='logo1' src={logo1} alt="Loading" height="28px" width="28px" />
                </Link>
            </div>
            <Link to="#">
            <div className="nav3">
                <span><div class="h1"></div></span>
                <span><div class="h2"></div></span>
                <span><div class="h3"></div></span>
            </div>
            </Link>
        </div>
    )
}
