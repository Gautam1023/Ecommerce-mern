import React, { useEffect, useState } from 'react'
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {

    const [cartdata, setCartdata] = useState("");
    // console.log(cartdata.carts)

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();

        if (res.status !== 201) {
            console.log("error");
        } else {

            setCartdata(data.carts);
        }

    }

    useEffect(() => {
        getdatabuy();
    }, []);

    return (

        <>
            {
                cartdata.length ?

                    <div className='buynow_section'>
                        <div className='buynow_container'>
                            <div className="left_buy">
                                <h1> Shopping Cart</h1>
                                <p> Select all items </p>
                                <span className='left_buyprice'> Price </span>
                                <Divider />

                                {

                                    cartdata.map((e, k) => {
                                        return (
                                            <>


                                                <div className="item_containert">
                                                    <img src={e?.detailUrl} alt="cart_img" />
                                                    <div className="item_details">
                                                        <h3> {e?.title?.longTitle} </h3>
                                                        <h3>{e?.title?.shortTitle}</h3>
                                                        <h3 className='differentprice'> ₹4049.00
                                                        </h3>
                                                        <p className='unusuall'> Usually Dispatched in 8 days</p>
                                                        <p> Eligible for free shipping</p>
                                                        <img src="av.png" alt="" />
                                                        <Option />



                                                    </div>
                                                    <h3 className='item_price'> ₹{e?.price?.cost}</h3>
                                                </div>
                                                <Divider />

                                            </>
                                        )

                                    })

                                }




                                <Subtotal iteam={cartdata} />





                            </div>
                            <Right iteam={cartdata}/>

                        </div>



                    </div> : ""










            }


        </>

    )
};

export default Buynow;
