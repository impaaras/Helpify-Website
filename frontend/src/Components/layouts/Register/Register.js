import React,{useState,} from 'react'
import "./Register.css"
import axios from 'axios'

const Register = () => {


  const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:""

  })

  const handleChange = (e) =>{
       e.preventDefault();
        const {name, value} = e.target

        setUser({
          ...user,
          [name]:value
        })
  }

  const register = async(e) =>{
    e.preventDefault();
    const {name, email, password, confirmPassword} = user

    if(name && email && password && confirmPassword && (password === confirmPassword)){
        // const res = await fetch("/register",{
        //    method:"POST",
        //    headers:{
        //      "Content-type":"aplication/json"
        //    },
        //    body:JSON.stringify({  
        //       name,email,password,confirmPassword
        //    })
        // })
        // const data = await res.json();

        // if(res.status === 400 | !data){
        //     console.log("INvalid data")
        // }
        // else{
        //     console.log("registereation seucskh");
        //     window.location.href = "http://localhost:3000/rides";
        // }

        axios.post("/register", {
            name,email,password,confirmPassword
        })
        .then((res) =>{
            console.log("sucess")
            window.location.href = "http://localhost:3000/signin";
        }).catch((err) =>{
            console.log(err)
        })

    }
    else{
      alert("Invalid inputs")
    }
  }

  return (
    <div className='signup__dashboard'>
      <div>
         <div className='signup__square'>
            <h2>Signup</h2>
            <div>
              <form method='POST'>
                <div className='form_inputs'>
                    <input type='text' name="name" value={user.name} onChange={handleChange} placeholder='Name....' />
                  <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Email....' />
                  <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Password....' />
                  <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleChange} placeholder='Confirm password...' />
                </div>
                <div className='check_forgot'>
                    <div className='form_checkbox'>
                    <input type='checkbox' />
                    <p>I agree with privacy and policy</p>
                  </div>
                </div>
                <button onClick={register}>Signup</button>
              </form>
              <div className='signup_footer'>
                <div className='have_account'>
                   <a href='/signin' >Already have an account?</a>
                </div>  
                <div className='signup_page'>
                 <a href='/signin'> Sign In </a>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Register