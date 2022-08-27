import axios from 'axios'
import React,{useState} from 'react'
import './Login.css'


  const Login = () => {

    const [user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = (e) =>{
        const {name, value} = e.target

        setUser({
          ...user,
          [name]:value
        })
  }
 
  const loginUser = (e) =>{
    e.preventDefault();
    const {email, password} = user

    if( email && password){
      
      axios.post("/login", {
        email,password

      }).then((res) =>{
         window.location.href = "http://localhost:3000";
      })
      .catch((err) =>{
        alert(err)
      })

    }else{
      alert("Invalid Crediantials")
    }


  }
  return (
    <div className='login__dashboard'>
    {console.log("user",user)}
      <div>
         <div className='login__square'>
            <h2>Login</h2>
            <div>
              <form method='POST'>
                <div className='form_inputs'>
                  <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter you email....' />
                  <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter you password....' />
                </div>
                <div className='check_forgot'>
                    <div className='form_checkbox'>
                    <input type='checkbox' />
                    <p>Remember me</p>
                  </div>
                  <div className='form_forgot'>
                    <a href='/' >Forget Password</a>
                  </div>
                </div>
                <button onClick={loginUser}>Login</button>
              </form>
              <p className='sign_with'>Or Sign in with</p>
              <div className='social__icons'>

              </div>
              <div className='login_footer'>
                <div className='have_account'>
                   <a href='/signup' >Don't have an account?</a>
                </div>
                <div className='signup_page'>
                 <a href='/signup'> Sign Up </a>
                </div>
              </div>

            </div>
         </div>
      </div>
    </div>
  )
}

export default Login