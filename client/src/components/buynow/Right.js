
import { React, useState, useEffect } from 'react'

const Right = ({ iteam }) => {


    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {
        let total = 0;
        iteam?.forEach((item) => {
            if (item?.price?.cost) {
                total += item.price.cost;
            }
        });
        setPrice(total);
    };

    return (
        <div className='right_buy'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your Oreder is Eligible for FREE Delivery</p> <br />
                <span style={{ color: "#565959" }}> Select this option for checkout. Details </span>
                <h3>Subtotal({iteam?.length || 0} items):{' '} <span style={{ fontWeight: 700 }}> ₹{price.toFixed(2)}  </span> </h3>
                <button className='rightbuy_btn'> Proceed To Buy</button>
                <div className="emi">
                    Emi available
                </div>
            </div>
        </div>
    )
}

export default Right;
