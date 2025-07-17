import { useContext } from 'react';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css";

const Rightheader = ({ logclose }) => {
    const { account, setAccount } = useContext(LoginContext);
    return (

        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                        account?.fname
                            ? <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
                            : <Avatar className="avtar"></Avatar>
                    }

                    {account ? <h3>Helloo, {account?.fname.toUpperCase()}</h3> : ""}



                </div>
                <div className="nav_btn" onClick={() => logclose()}>

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">   Shop by Category </NavLink>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />


                    <NavLink to="/">Todays Deal</NavLink>
                    

                    {
                        account ?
                            <NavLink to="/buynow">Your order</NavLink> :
                            <NavLink to="/login"> Your Orders</NavLink>

                    }

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                    <div className="flag">
                        <NavLink to="/"> Settings</NavLink>
                        <img src="" alt="" />

                    </div>

                </div>
            </div>
        </>

    )
}

export default Rightheader
