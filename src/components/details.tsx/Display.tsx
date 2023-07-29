import React, { useContext } from 'react'
import { cn } from '@/lib/utils'
import {CopyToClipboard} from "react-copy-to-clipboard"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from '@/utils/Icons'
import Allcontext from '@/store/context'
import { Input } from '../ui/input'
import { FormikProps } from 'formik'
// import { IBaseInterface } from '@/utils/interfaces'
import { IDetail } from '@/utils/interfaces'

interface IDisplay{
    text?:string
    className?:string
    ngClass?:string
    label:string
    style?:string
    type?:'text'|'email'
    name?:string
    formik?:FormikProps<IDetail>
}

export default function Display({text="",name="",label,className,ngClass,style,type='text',formik}:IDisplay) {
   const {isEditing} = useContext(Allcontext)
   const {toast} = useToast()
   const handletoast = ()=>{
      toast({
         className:"border border-green-500",
         duration:2000,
         description:`${text} is copied to clipboard`,
      })
   }
   return (
   <div className={cn("w-full mb-4 relative text-sm  rounded-sm",className)}>
      <span className='block mb-[2px] ml-1 uppercase font-medium'>{label}</span>
      {!isEditing && <div className={cn('bg-[#F8F8F8] whitespace-nowrap font-normal px-2 h-10 sm:h-12 flex items-center default-scroll pb-1 overflow-auto rounded-sm border',style)}>
         <span className={cn("",ngClass)}>{text}</span>
         <CopyToClipboard onCopy={handletoast} text={text}>
               <Icons.clipboard className ="absolute cursor-pointer rounded-lg text-2xl bg-[#F8F8F8] text-main sm:text-3xl bottom-1 right-3 px-1"/>
         </CopyToClipboard>
      </div>}
      {isEditing && <Input onChange={formik?.handleChange} name={name} value={text} type={type} className='h-10 focus:border  sm:h-12 focus-visible:ring-1  bg-[#F8F8F8]'/>}
   </div>
  )
}
