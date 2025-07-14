import React, { useState, useContext } from 'react'
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';



const Sign_in = () => {

  const [logdata, setData] = useState({
    email: "",
    password: ""

  });
  console.log(logdata);

  const { account, setAccount } = useContext(LoginContext);


  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value
      }
    })
  }

  const senddata = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    /*if (!fname || !email || !password || !cpassword) {
        alert("All fields are required!");
        return;
    } */

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password

      })

    });

    const data = await res.json();
    console.log(data);

    if (res.status == 422 || !data) {
      console.log("Invalid credential")
      alert("no data")


    } else {
      console.log("Data  valid")
      setAccount(data)
      alert("Data valid")
      setData({ ...logdata, email: "", password: "", });
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
            <h1> Sign In</h1>
            <div className='form_data'>
              <label htmlFor="email">Email</label>
              <input type="text"
                onChange={adddata}
                value={logdata.email}
                name="email" id="email" />

            </div>

            <div className='form_data'>
              <label htmlFor="password">Password</label>
              <input type="password"
                onChange={adddata}
                value={logdata.password}
                name="password" id="password" placeholder='Enter password' />
            </div>


            <button className='signin_btn' onClick={senddata}>Continue</button>





          </form>

        </div>
        <div className='create_accountinfo'>
          <p> New to Amazon</p>
          <NavLink to="/register">  <button> Create Ur Amazon Account</button> </NavLink>
        </div>
      </div>
    </section>



  )
}

export default Sign_in
