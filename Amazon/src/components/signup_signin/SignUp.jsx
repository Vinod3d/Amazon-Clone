import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [udata, setUdata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    // console.log(udata)
    const adddata = (e)=>{
        const {name, value} = e.target;
        setUdata({...udata,[name]:value})
    }

  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-Up</h1>

                        <div className="form_data">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="name"  value={udata.name} onChange={adddata} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={udata.email} onChange={adddata} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text" name="mobile" id="mobile" value={udata.mobile} onChange={adddata} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="At least 6 characters"  value={udata.password} onChange={adddata}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" name="cpassword" id="cpassword"  value={udata.cpassword} onChange={adddata}/>
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>

                        <div className="signin_info">
                            <p>Already have an account</p>
                            <NavLink to={'/login'}>SignIn</NavLink>
                        </div>
                    </form>
                    
                </div>
               
            </div>

    </section>
  )
}

export default SignUp
