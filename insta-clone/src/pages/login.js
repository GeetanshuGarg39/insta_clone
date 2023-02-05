import Card from "../../components/Card"
import Button from "../../components/Button"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import pb from '..//..//components/lib/pocketbase';
import { useRouter } from "next/router";

const login = () => {
  const router =useRouter()
  const {register,handleSubmit}= useForm();
  const [isLoading,setLoading]=useState(false);
  const [isLogged,setLogged]=useState(false);

  useEffect(()=>{
    if(isLogged === true){
      router.push("/");
    }
  })

  async function login(data){
      setLoading(true)
      try{
          const authData=await pb.collection("users").authWithPassword(data.username,data.password);
      setLogged(pb.authStore.isValid);
      router.push('/');
      }catch(error){
          alert(error)
      }
      setLoading(false)
  }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-50 h-screen'>
      <Card>
        <form onSubmit={handleSubmit(login)}>
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png " className=' h-1/2 w-3/4 ' ></img>
        <input className=' border-2 rounded h-9 my-1 w-full bg-slate-50' placeholder='username' name="username" {...register('username')}></input>
        <input className=' border-2 rounded h-9 my-1 w-full bg-slate-50' type='password' placeholder='Password ' name='password' {...register('password')}></input>
        <Button type="submit" disabled={isLoading}>{isLoading? "Loading":"Login"}</Button>
        </form>
        <a href="">Forgot Password?</a>
      </Card>
      <Card>
        <p>Don't have an account? <a href='/signup'>Sign up</a></p>
      </Card>
    </div>
  )
}

export default login
