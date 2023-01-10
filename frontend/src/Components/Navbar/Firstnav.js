import React, { useEffect, useState } from 'react'
import Style from "./nav.css"

function Firstnav() {

    const [stickyClass, setStickyClass] = useState("");

    // function stickNavbar() {
    //     if (window.scrollY >= 0.1) {
    //         setStickyClass("sticky-nav")
    //     }
    //     else {
    //         setStickyClass("");
    //     }
    // }

    // window.addEventListener("scroll", stickNavbar);


    return (
        <div id='firstnavparentdiv' className={stickyClass}>
            <div>
                <div className='flipkartLogoDiv'>
                    <img src={require('./images/Flipkart-Logo.png')} />
                </div>
                <div className='SearchbarDiv'>
                    <input placeholder='Search for products, brands and more' />
                    <img src={require('./images/searchicon.png')} />
                </div>
                <div className='logindiv'>
                    <button>LogIn</button>
                </div>
                <div className='AdminDiv'>
                    <p>Admin</p>
                </div>
                <div className='cartdiv'>
                    <img src={require('./images/cart.png')} />
                    <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Firstnav