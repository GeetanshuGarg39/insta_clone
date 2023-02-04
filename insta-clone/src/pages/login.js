import React from 'react'
import Card from "../../components/Card"
import Button from "../../components/Button"
const login = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-50 h-screen'>
      <Card>
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png " className=' h-1/2 w-3/4 ' ></img>
        <input className=' border-2 rounded h-9 my-1 w-full bg-slate-50' placeholder='Phone Number, username, or email '></input>
        <input className=' border-2 rounded h-9 my-1 w-full bg-slate-50' placeholder='Password '></input>
        <Button children = 'Log in'></Button>
        <a href="">Forgot Password?</a>
      </Card>
      <Card>
        <p>Don't have an account? <a href=''>Sign up</a></p>
      </Card>
    </div>
  )
}

export default login
