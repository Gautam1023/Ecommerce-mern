import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./cart.css";
import { Divider } from '@mui/material';

const Cart = () => {

    const { id } = useParams("");

    const [inddata, setInddata] = useState({});
    console.log("Fetched data:", inddata);

    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();


        if (res.status !== 200) {
            console.log("no data available")

        } else {
            console.log("getdata");
            setInddata(data);
        }

        //console.log(data);
    }


    useEffect(() => {
        getinddata();

    }, [id]);

    console.log("Image URL:", inddata?.detailUrl);





    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">


                    {inddata.detailUrl && (
                        <img src={inddata.detailUrl} alt="cart" />
                    )}
                    <div className="cart_btn">
                        <button div className='cart_btn1'> Add to cart</button>
                        <button div className='cart_btn2'> Buy Now</button>
                    </div>

                </div>
                <div className="right_cart">
                    <h3>{inddata.title?.shortTitle}</h3>
                    <h4> {inddata.title?.longTitle}</h4>
                    <Divider />
                    <p className="mrp">M.R.P : ₹{inddata.price?.mrp}</p>
                    <p> Deal of the day : <span style={{ color: "#B12704" }}>{inddata.price?.cost}</span></p>
                    <p> You Save : <span style={{ color: "#B12704" }}>{inddata.price?.mrp - inddata.price?.cost} ({inddata.price?.discount})</span></p>

                    <div className="discount_box">
                        <h5> Discount : <span style={{ color: "#111" }}> {inddata.discount}</span> </h5>
                        <h4> Free Delivery : <span style={{ color: "#111", fontWeight: 600 }}> Oct 8 -21 </span>Details</h4>
                        <p> Fastest Delivery : <span style={{ color: "#111", fontWeight: 600 }}> Tomorrow 11 AM</span> </p>
                    </div>

                    <p className="description"> About the Item : <span style={{ color: "#565959", fontWeight: "500", fontSize: "14", letterSpacing: "0.4px" }}>{inddata.description}</span>

                    </p>





                </div>

            </div>

        </div>


    )
}

export default Cart;
