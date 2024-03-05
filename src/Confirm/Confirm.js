import React from 'react'
import './Confirm.css'
import { useNavigate } from 'react-router-dom';

function Confirm() {

    const navigate=useNavigate();
    const message =() => {
        alert('Your password has been reset!')
    }
  

    const login =()=>{
        navigate('/');
    }
  return (
    
    <div className="main_div container w-50" style={{marginTop:"6rem"}}>
        
			<img src="https://www.ldtech.in/images/logo.png" alt='logo'/>
            <p className="p1">Password Confirmation</p>

            <form  method="post">
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label text1">Enter New Password:</label>
                    <div>
                        <input type="email" className="form-control w-75" id="userId"  required/>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label text1">Confirm New Password</label>
                    <div>
                        <input type="password" className="form-control w-75" id="password" required/>
                    </div>
                    
                </div>
				
                <div className="mb-3">
                    <button type="submit" className="btn btn-dark form-control w-75" onClick={message} >Confirm</button>
                </div>
                <span>
            <p className="a1" onClick={login}>
              &lt; Back to Login
            </p>
          </span>
            </form>
        </div>
    
      
    
  )
}

export default Confirm;
