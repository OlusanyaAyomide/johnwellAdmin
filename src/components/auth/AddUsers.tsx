import React, { useContext, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePostRequest } from '../hooks/useRequestProcessor'
import { NewUserrequest as mutationFn } from '../hooks/postrequests'
import { Loader} from 'lucide-react'
import Allcontext from '@/store/context'
import { Icons } from '@/utils/Icons'
import { toast } from '../ui/use-toast'


export default function AddUser() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isAdmin,setIsAdmin] = useState(false)
  const {setStep} = useContext(Allcontext)
  const [isVisible,setIsVisible] = useState(false)
  const [name,setName] = useState("")
  const onSuccess = ()=>{
    toast({
        description:"User Added succesfully",
        className:"border-green-500 border-2",
    })
    setStep(1)
  }
  const handleSubmit = ()=>{
    mutate({email,password,isAdmin,name})
  }
  const {isLoading,mutate} = usePostRequest({queryKey:"add-user",mutationFn,onSuccess})
  return (
    <div className='mb-6 w-full max-w-[400px]  rounded-xl'>
      <h1 className="text-2xl  text-center mb-6">User Management</h1>
        <div className='py-12 bg-background px-2 shadow-lg  relative  rounded-lg border-border border'>
            <h1 className='header'>Add New User</h1>
            <div className ="mt-3 px-2">
              <div>
                <h1 className="mb-1 text-base font-medium">Email</h1>
                <Input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='focus-visible:ring-1 ring-main' name='email' type='email'/>
              </div>
              <div>
                <h1 className="mt-4 text-base font-medium">Name</h1>
                <Input placeholder='email' value={name} onChange={(e)=>setName(e.target.value)} className='focus-visible:ring-1 ring-main' name='email' type='text'/>
              </div>
              <div className='relative'>
                <h1 className='mt-4 mb-1 text-base font-medium'>Password</h1>
                <Input placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus-visible:ring-1 ring-main' name='password' type={isVisible?"text":"password"}/>
                <button className='cursor-pointer text-gray-700 p-2  text-lg absolute right-1 bottom-1' onClick={()=>{setIsVisible((prev=>!prev))}}>
                  {isVisible?<Icons.hide/>:<Icons.show/>}
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <input type='checkbox' checked={isAdmin} onChange={()=>{setIsAdmin(prev=>!prev)}}/>
                <span className='font-medium text-base ml-3'>Make this user admin</span>
              </div>
              <Button type='button' onClick={handleSubmit} disabled={isLoading} className='block w-full h-11 bg-main mt-8 hover:bg-blue-700'>Add User</Button>
            </div>
            {isLoading && <div className="absolute grid place-content-center inset-0 z-30 bg-black/10">
          <Loader className='text-main animate-spin duration-1000'/>
        </div>}
        </div>
    </div>


  )
}
