import React, { useContext, useRef, useState } from 'react'
import { Card, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePostRequest } from '../hooks/useRequestProcessor'
import { SignInRequest as mutationFn } from '../hooks/postrequests'
import { AxiosError, AxiosResponse } from 'axios'
import { Loader, Loader2 } from 'lucide-react'
import { parseCookies,setCookie,destroyCookie } from 'nookies'
import Allcontext from '@/store/context'
import { ILogIn } from '@/utils/interfaces'
import { Icons } from '@/utils/Icons'

export default function LogIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {setStep,setProfile} = useContext(Allcontext)
  const [isVisible,setIsVisible] = useState(false)

  const onSuccess = (res:AxiosResponse<ILogIn>)=>{
    const {authCookie} = parseCookies()
    if (authCookie){
       destroyCookie(null,"authCookie")
    }
    setCookie(null,"authCookie",res.data.token, {
       maxAge: 60 * 60*  24 * 30,
       path: '/',
     })
     setProfile(res.data.user)
     setStep(1)
    
  }
  const onError = (err:AxiosError<any>)=>{
    console.log(err)
  }
  const handleSubmit = ()=>{
    mutate({email,password})
  }
  const {isLoading,mutate} = usePostRequest({queryKey:"sign-in",mutationFn,onSuccess,onError})
  return (
    <div className='w-screen h-screen grid bg-black/5 place-items-center'>
        <div className='mb-6 w-full max-w-[400px]  rounded-xl'>
          <h1 className="text-2xl sm:text-3xl text-center mb-6">Johnwell Forms</h1>
            <div className='py-12 bg-background px-2 shadow-lg  relative  rounded-lg border-border border'>
                <h1 className='header'>Log In to continue</h1>
                <div className ="mt-3 px-2">
                  <div>
                    <h1 className="mb-1 text-base font-medium">Email</h1>
                    <Input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='focus-visible:ring-1 ring-main' name='email' type='email'/>
                  </div>
                  <div className='relative'>
                    <h1 className='mt-4 mb-1 text-base font-medium'>Password</h1>
                    <Input placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus-visible:ring-1 ring-main' name='password' type={isVisible?"text":"password"}/>
                    <button className='cursor-pointer text-gray-700 p-2  text-lg absolute right-1 bottom-1' onClick={()=>{setIsVisible((prev=>!prev))}}>
                      {isVisible?<Icons.hide/>:<Icons.show/>}
                    </button>
                  </div>
                  <Button type='button' onClick={handleSubmit} disabled={isLoading} className='block w-full h-11 bg-main mt-8 hover:bg-blue-700'>Log In</Button>
                </div>
                {isLoading && <div className="absolute grid place-content-center inset-0 z-30 bg-black/10">
              <Loader className='text-main animate-spin duration-1000'/>
            </div>}
       </div>

        </div>

    </div>
  )
}
