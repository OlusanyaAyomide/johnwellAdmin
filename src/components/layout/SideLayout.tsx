import React from 'react'
import { Button } from '../ui/button'
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,
 } from "@/components/ui/accordion"
import TopButtons from './TopButtons'
import { accordionItem, statusPreview } from '@/utils/contants'
import { Separator } from '../ui/separator'
  

export default function SideLayout() {
  return (
   <div className='text-white pt-5 px-3 pb-6'>
      <TopButtons/>
      <h1 className='mt-6 mb-2 text-base font-bold text-white ml-1'>Filter</h1>
      <div className='bg-[#022567]/50 rounded-lg '>
         <Accordion  type='multiple' className='mb-8'>
            {accordionItem.map((item,key)=>{
               const Icon = item.icon
               return <AccordionItem key={key} value={`${key}`} className='my-1 p-0 border-1 border-b  rounded-lg'>
                  <AccordionTrigger className=' flex items-center px-2 justify-between'>
                     <div className='flex'>
                     <span className='text-lg text-white'><Icon/></span>
                     <span className='ml-3 hover:no-underline'>{item.label}</span>
                     </div>
                  </AccordionTrigger>
                  {item.options.map((items,keys)=>(
                      <AccordionContent  className='rounded-sm  hover:bg-white hover:text-black' key={keys}>
                         <h1 className='relative top-2 pl-10  cursor-pointer items-center  flex'>
                            <span className='font-semibold text mr-3'>-</span>
                            <span className='text-opacity-80'>{items.name}</span>
                         </h1>
                      </AccordionContent>
                  ))}
               </AccordionItem>
            })}
         </Accordion>
      </div>
      <Separator className='mb-8 opacity-20'/>
      {statusPreview.map((item,key)=>(
         <div className='flex items-center my-4 justify-between' key={key}>
            <div className="flex items-center">
               <item.icon className="mr-2 text-lg"/>
               <span className=''>{item.name}</span>
            </div>
            <span className='font-semibold'>{item.count}</span>
         </div>
      ))}
   </div>
  )
}
