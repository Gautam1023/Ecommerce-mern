import React from 'react'
import "./cart.css";
import { Divider } from '@mui/material';

const cart = () => {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">

                    <img src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="cart_img" />
                    <div className="cart_btn">
                        <button div className='cart_btn1'> Add to cart</button>
                        <button div className='cart_btn2'> Buy Now</button>
                    </div>

                </div>
                <div className="right_cart">
                    <h3> Fitness Gear</h3>
                    <h4> Piegon fav electric cell</h4>
                    <Divider />
                    <p className="mrp">M.R.P : ₹1194</p>
                    <p> Deal of the day : <span style={{ color: "#B12704" }}> ₹600</span></p>
                    <p> You Save : <span style={{ color: "#B12704" }}> ₹500 (34%)</span></p>

                    <div className="discount_box">
                        <h5> Discount : <span style={{ color: "#111" }}> Extra 10% offf</span> </h5>
                        <h4> Free Delivery : <span style={{ color: "#111", fontWeight: 600 }}> Oct 8 -21 </span>Details</h4>
                        <p> Fastest Delivery : <span style={{ color: "#111", fontWeight: 600 }}> Tomorrow 11 AM</span> </p>
                    </div>

                    <p className="description"> About the Item : <span style={{ color: "#565959", fontWeight: "500", fontSize: "14", letterSpacing: "0.4px" }}> Guys Seriously the product is very good to use . A lot customer appreciated</span>

                    </p>





                </div>

            </div>

        </div>


    )
}

export default cart
