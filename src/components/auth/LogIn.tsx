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

export default function LogIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {setStep} = useContext(Allcontext)

  const onSuccess = (res:AxiosResponse<any>)=>{
    console.log(res)
    const {authCookie} = parseCookies()
    if (authCookie){
       destroyCookie(null,"authCookie")
    }
    setCookie(null,"authCookie",res.data.token, {
       maxAge: 60 * 60*  2,
       path: '/',
     })
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
    <div className='w-screen h-screen grid place-items-center'>
        <div className='mb-6 w-full max-w-[400px] relative overflow-hidden rounded-xl'>
          <h1 className="text-2xl sm:text-3xl  text-center mb-6">Johnwell Forms</h1>
            <Card className='py-12 px-2 shadow-lg'>
                <h1 className='header'>Log In to continue</h1>
                <div className ="mt-3 px-2">
                  <h1 className="mb-1 text-base font-medium">Email</h1>
                  <Input value={email} onChange={(e)=>setEmail(e.target.value)} className='focus-visible:ring-1 ring-main' name='email' type='email'/>
                  <h1 className='mt-4 mb-1 text-base font-medium'>Password</h1>
                  <Input onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus-visible:ring-1 ring-main' name='password' type='password'/>
                  <Button type='button' onClick={handleSubmit} disabled={isLoading} className='block w-full h-11 bg-main mt-8 hover:bg-blue-700'>Log In</Button>
                </div>
            </Card>
            {isLoading && <div className="absolute grid place-content-center inset-0 z-30 bg-black/10">
              <Loader className='text-main animate-spin duration-1000'/>
            </div>}
        </div>

    </div>
  )
}
