import React,{useContext, useState,useRef} from 'react'
import { Popover,PopoverContent,PopoverTrigger } from '../ui/popover'
import Allcontext from '@/store/context'
import { Button } from '../ui/button'
import { Icons } from '@/utils/Icons'
import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { usePostRequest } from '../hooks/useRequestProcessor'
import request from '../hooks/requests'
import { Johnwell } from '@/utils/FullScreenLoader'
import { AxiosResponse } from 'axios'
import { IDetail } from '@/utils/interfaces'
import { useToast } from '../ui/use-toast'


interface IAdmin{
  Icon:any,
  text:string,
  onClick?:()=>void
  className?:string
  disabled?:boolean
}

export default function Admin() {
  const ref = useRef<HTMLButtonElement>(null)
  const [isOpen,setIsOpen] = useState(false)
  const {toast} = useToast()
  const {isEditing,setIsEditing,setActiveDetail,Appfilters,activeDetail:{_id,status}} = useContext(Allcontext)
  const mutationFn = (body:any)=>{
    return request.post(`api/v1/prestatusupdate/${_id}`,body)
  }
  const onSuccess = (res:AxiosResponse<{data:IDetail}>)=>{
    toast({
      description:"status updated succesfully",
      className:"border-2 border-green-500"
    })
    setIsOpen(false)
    setActiveDetail(res.data.data)
  }
  const {mutate,isLoading} = usePostRequest({queryKey:"updatepost",mutationFn,onSuccess})
  const Buttons = ({Icon,text,onClick,className,disabled}:IAdmin)=>(
    <Button disabled={disabled}  variant='ghost' onClick={onClick} className={cn('flex py-2 w-full items-center justify-start',className)}>
      <span className="text-main text-lg mr-2 group-hover:text-white"><Icon/></span>
      <span>{text}</span>
    </Button>
  )
  return (
    <>
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
         <Button variant={'outline'} className='max-xs:ml-2  px-8 flex'>
          <span className='pr-6'>Admin</span>
          <span className={`transition-all duration-200 ${isOpen?"rotate-180 ":""}`}><Icons.angleDown/></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent onFocusOutside={()=>{setIsOpen(false)}} className='lg:right-3 w-[250px] px-2 py-6'>
        <Buttons disabled={status === "active"}  text='Save as active' onClick={()=>{mutate({status:"active"})}}
         Icon={Icons.inProgress}/>
        <Separator className='my-4'/>
        <Buttons disabled={status === "pending"} text='Save as pending' onClick={()=>{mutate({status:"pending"})}}
         Icon={Icons.clock}/>
        <Separator className='my-4'/>
        <Buttons disabled={status === "completed"} text='Save as completed' onClick={()=>{mutate({status:"completed"})}}
         Icon={Icons.completed}/>
        <Separator className='my-4'/>
        <Buttons text={isEditing?"Cancel Edit":"Edit"} onClick={()=>{
          setIsOpen(false)
          setIsEditing((prev=>!prev))}} Icon={Icons.edit}/>
        <Separator className='my-4'/>
        <Buttons onClick={()=>{ref.current?.click()}} text='Delete' Icon={Icons.trash} className='hover:bg-red-500 group  w-full hover:text-white'/>
      </PopoverContent>
     </Popover>
     <AlertDialog>
          <AlertDialogTrigger className='w-full hidden' asChild>
          <button ref={ref}>Click</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to delete this?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this entry from the server.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel >Cancel</AlertDialogCancel>
              <AlertDialogAction className='hover:bg-red-500'>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {isLoading && <div className='absolute z-40 -inset-2 grid place-content-center bg-black/20'>
          <div className="fixed w-fit top-[50%] right-[27%] ">
          <Johnwell/>
          </div>
        </div>}
    </>

  )
}
