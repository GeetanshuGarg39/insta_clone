import React from 'react'
import Card from "../../components/Card"
import Button from "../../components/Button"
const login = () => {
  return (
    <>
    <div className='flex flex-col w-auto  bg-slate-50 justify-center items-center'>
      <Card>
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png " className=' h-1/5 w-3/4 ' ></img>
        <p className=' text-base text-center mb-3 text-slate-500'>Sign up to see photos and videos from your friends.</p>
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder="Mobile Number or Email" />
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder='Full Name' />
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder='Username' />
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder='Password' />
        <p className=' text-sm text-center my-2 text-slate-400'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
        <p className='text-sm text-center my-2 text-slate-400'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
        <Button children = "Sign Up"></Button>
      </Card>
      <Card >
        <p>Have an account? <a href='Log In'>Log In</a></p>
        
      </Card>

    </div>
    
    </>
  )
}

export default login
