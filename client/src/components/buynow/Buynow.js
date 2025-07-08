import React from 'react'
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
    return (
        <div className='buynow_section'>
            <div className='buynow_container'>
                <div className="left_buy">
                    <h1> Shopping Cart</h1>
                    <p> Select all items </p>
                    <span className='left_buyprice'> Price </span>
                    <Divider />


                    <div>
                        <div className="item_containert">
                            <img src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="cart_img" />
                            <div className="item_details">
                                <h3> Black freeuse (heloo waitch) </h3>
                                <h3> Smart Watches</h3>
                                <h3 className='differentprice'> ₹4049.00
                                </h3>
                                <p className='unusuall'> Usually Dispatched in 8 days</p>
                                <p> Eligible for free shipping</p>
                                <img src="av.png" alt="" />
                                <Option />



                            </div>
                            <h3 className='item_price'> ₹4049.00</h3>
                        </div>
                        <Divider />
                        <Subtotal />




                    </div>


                </div>
                <Right />


            </div>


        </div>
    )
}

export default Buynow;
