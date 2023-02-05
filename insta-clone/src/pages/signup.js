import { useState } from 'react';
import Card from "../../components/Card"
import Button from "../../components/Button"
import { useForm } from 'react-hook-form';
import pb from '..//..//components/lib/pocketbase';
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter()
  const {register,handleSubmit}= useForm();
  const [isLoading,setLoading]=useState(false);

  async function signup(data){
      setLoading(true)
      try{
          const record = await pb.collection('users').create(data);
          router.push('/')
      }catch(error){
          alert(error)
      }
      setLoading(false)

  } 
  return (
    <>
    <div className='flex flex-col w-auto  bg-slate-50 justify-center items-center'>
      <Card>
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png " className=' h-1/5 w-3/4 ' ></img>
        <p className=' text-base text-center mb-3 text-slate-500'>Sign up to see photos and videos from your friends.</p>
        <form onSubmit={handleSubmit(signup)}>
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder="Username" name='username' {...register('username')}/>
        <input type="text" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' placeholder='Email' name='email' {...register('email')} />
        <input type="password" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' name='password' placeholder='password' {...register('password')}/>
        <input type="password" className=' w-full bg-slate-50 h-9 my-1 border-2 border-slate-300 rounded p-1.5' name='passwordConfirm' placeholder='Confirm password' {...register('passwordConfirm')} />
        <p className=' text-sm text-center my-2 text-slate-400'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
        <p className='text-sm text-center my-2 text-slate-400'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
        <Button type="submit" disabled={isLoading}>{isLoading? "Loading":"Sign up"}</Button>
        </form>
      </Card>
      <Card >
        <p>Have an account? <a href='/login'>Log In</a></p>
        
      </Card>

    </div>
    
    </>
  )
}

export default signup
