import React, { useEffect, useState } from 'react';

const Subtotal = ({ iteam }) => {
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
        <div className='sub_item'>
            <h3>
                Subtotal ({iteam?.length || 0} items):{' '}
                <strong style={{ fontWeight: 700, color: '#111' }}> ₹{price.toFixed(2)} </strong>
            </h3>
        </div>
    );
};

export default Subtotal;

