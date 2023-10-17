import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
    
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
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text" name="mobile" id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" name="cpassword" id="cpassword" />
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
