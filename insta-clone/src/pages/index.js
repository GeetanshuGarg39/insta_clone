
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import pb from '..//..//components/lib/pocketbase';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router= useRouter();
  const [isLogged,setLogged]=useState(false);
  useEffect(()=>{
    if(pb.authStore.isValid){
      setLogged(true);
    }else{
      router.push("/login");
    }
  })
  async function logout(){
    pb.authStore.clear();
    setLogged(false);
    router.push("/login");
}
  
  return (
    <>
    <h1> {isLogged?"Hello"+pb.authStore.model.email.toString():"refresh"}</h1>
    <button className=" bg-blue-400 text-center py-2 w-full text-white text-lg font-semibold rounded-md hover:bg-blue-600 active:bg-blue-400 m-2" onClick={logout}> Logout </button>
    </>
  )
}
