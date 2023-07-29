import React,{useContext} from 'react'
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,
 } from "@/components/ui/accordion"
import TopButtons from './TopButtons'
import { accordionItem, statusPreview } from '@/utils/contants'
import { Separator } from '../ui/separator'
import Allcontext from '@/store/context'
import { Icons } from '@/utils/Icons'
import { destroyCookie } from 'nookies'

export default function SideLayout() {
   const {profile:{isAdmin},setStep,setAppFilters,Appfilters,timeLine} = useContext(Allcontext)
   const checkIsActive = (key:number,name:string)=>{
      const value = name.toLocaleLowerCase()
      if (key===0){
         if(Appfilters.status === value ){return true}else{return false}
      }
      if(key==1){
         if(Appfilters.duration === value){return true}else{return false}
      }
      else return false
   }
   const handleClick = (key:number,name:string)=>{
      const value =name.toLowerCase()
      if (key === 0  && value ==="active" || value==="completed" || value === "pending" || value ==="all"){

         setAppFilters((prev)=>{return{...prev,status:value}})
      }
      if (key ===1 && value==="week" || value ==="month" || value==="all"){
         setAppFilters((prev)=>{return{...prev,duration:value}})
      }

   }   
  return (
   <div className='text-white pt-5 px-3 pb-6'>
      <TopButtons/>
      <h1 className='mt-6 mb-2 text-base font-bold text-white ml-1'>Filter</h1>
      <div className='bg-[#022567]/50 rounded-lg '>
         <Accordion  type='multiple' className='mb-8'>
            {accordionItem.map((item,key)=>{
               const Icon = item.icon
               return <AccordionItem key={key} value={`${key}`} className={`my-1 p-0 border-1 ${key!==2?"":isAdmin?"":"hidden"} border-b  rounded-lg`}>
                  <AccordionTrigger className=' flex items-center px-2 justify-between'>
                     <div className='flex'>
                     <span className='text-lg text-white'><Icon/></span>
                     <span className='ml-3 hover:no-underline'>{item.label}</span>
                     </div>
                  </AccordionTrigger>
                  {item.options.map((items,keys)=>{
                     const isActive = checkIsActive(key,items.name)
                      return (<AccordionContent onClick={()=>{handleClick(key,items.name)}} className={`rounded-sm ${isActive?"bg-white hover:bg-white text-black hover:text-black":""}`} key={keys}>
                         <h1 className='relative top-2 pl-10  cursor-pointer items-center  flex'>
                            <span className='font-semibold text mr-3'>-</span>
                            <span className='text-opacity-80'>{items.name}</span>
                         </h1>
                      </AccordionContent>)
                   })}
               </AccordionItem>
            })}
         </Accordion>
      </div>
      <Separator className='mb-8 opacity-20'/>
      {statusPreview.map((item,key)=>{
         // const value = time
        return <div className='flex items-center my-4 justify-between' key={key}>
            <div className="flex items-center">
               <item.icon className="mr-2 text-lg"/>
               <span className=''>{item.name}</span>
            </div>
            <span className='font-semibold'>{item.count}</span>
         </div>
      })}
      <Separator className='mb-8 opacity-20'/>
      <div onClick={()=>{
         destroyCookie(null,"authCookie");setStep(0)
      }} className='flex items-center my-4 py-2 -mx-3 px-3 rounded-sm hover:bg-white/80 hover:text-black justify-between cursor-pointer'>
         <div className='flex items-center'>
            <Icons.logout className="mr-2 text-lg"/>
            <span>Log out</span>
         </div>
      </div>
   </div>
  )
}
