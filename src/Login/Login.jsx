import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

function Login() {

    const navigate=useNavigate();
    const [userId,setuserId]=useState('');

    const handleuserIdChange = (event) =>{
        setuserId(event.target.value);

    }

    const fpassword =()=>{
        navigate('/forgot');
    }
   

    const homepage =()=>{
        if(!userId) {
            alert('Please fill out the required field')
        }
        else{
           alert('Welcome to Homepage')
        }
        navigate('/homepage')
    }

    // const callSignInApi = async() =>{
    //     try{
    //         const response=await.axios.post('http://localhost:8080/signin',{

    //         })
    //     }
    // }
  return (
    
    <div className="main_div container w-50" style={{marginTop:"6rem"}}>
        
			<img src="https://www.ldtech.in/images/logo.png" alt='logo'/>
            <p className="p1">Timesheet Application</p>

            <form  method="post">
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label text1" value={userId} onChange={handleuserIdChange}>UserId</label>
                    <div>
                        <input type="email" className="form-control w-75" id="userId"  required/>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label text1">Password</label>
                    <div>
                        <input type="password" className="form-control w-75" id="password" required/>
                    </div>
                    <span><p className='pf' onClick={fpassword}>Forgot Password?</p></span>
                </div>
				
                <div className="mb-3">
                    <button type="submit" className="btn btn-dark form-control w-75" onClick={homepage}>Sign In</button>
                </div>
            </form>
        </div>
    
      
    
  )
}

export default Login;
