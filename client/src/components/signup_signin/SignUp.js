import React, { useState } from 'react'
import "./singnup2.css";
import { NavLink } from 'react-router-dom';

const SignUp = () => {


    const [udata, setUData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",

        cpassword: ""

    });
    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;


        setUData(() => {
            return {
                ...udata,
                [name]: value
            }
        })


    };

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } = udata;

        if (!fname || !email || !password || !cpassword) {
            alert("All fields are required!");
            return;
        }

        const res = await fetch("register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword

            })

        });

        const data = await res.json();
        //console.log(data);

        if (res.status == 422 || !data) {
            alert("no data")


        } else {
            alert("Data added Succesfully")
            setUData({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
        }
    }










    return (



        <section>
            <div className='Sign_contsainer'>
                <div className='sign_header'>
                    <img src="./logo5.png" alt="amazonlogo" />

                </div>
                <div className='sign_form'>

                    <form method='POST'>
                        <h1> Sign - Up</h1>
                        <div className='form_data'>
                            <label htmlFor="fname">Name</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.fname}
                                name="fname" id="fname" />

                        </div>

                        <div className='form_data'>
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.email}
                                name="email" id="email" />
                        </div>


                        <div className='form_data'>
                            <label htmlFor="number">Number</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.number}
                                name="mobile" id="mobile" />
                        </div>



                        <div className='form_data'>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.password}
                                name="password" id="password" placeholder='Enter password' />
                        </div>


                        <div className='form_data'>
                            <label htmlFor="cpassword">Password Again</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.cpassword}
                                name="cpassword" id="cpassword" placeholder='Enter password' />
                        </div>



                        <button className='signin_btn' onClick={senddata}>Continue</button>
                        <div className="signin_info">
                            <p>
                                Already Have an Account??

                            </p>
                            <NavLink to="/login">Sign In</NavLink>

                        </div>






                    </form>

                </div>

            </div>
        </section>


    )
}

export default SignUp
