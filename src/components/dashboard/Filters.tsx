import React, { useContext } from 'react'
import { Select,SelectItem,SelectTrigger, SelectValue,SelectContent,SelectLabel,SelectSeparator } from '../ui/select'
import { SelectGroup } from '@radix-ui/react-select'
import Paginator from './Paginator'
import Allcontext from '@/store/context'


export default function Filters() {
   const {setAppFilters,Appfilters:{duration,status,limit},step} = useContext(Allcontext)
   const handleDuration=(value:"all" | "week" | "month")=>{
      setAppFilters((prev)=>{return {...prev,duration:value}})
   }
   const handleLimit =(value:string)=>{
      const number = Number(value)
      setAppFilters((prev)=>{return {...prev,limit:number,page:1}})
   }
   const handleStatus = (value:"active" | "completed" | "pending" | "all")=>{
      setAppFilters((prev)=>{return {...prev,status:value}})
   }
  return (
    <div className='flex items-center max-sm:flex-wrap justify-between mb-1'>
      <Paginator/>
      <div className='grow flex justify-end'>
      <Select onValueChange={handleDuration} >
            <SelectTrigger className='max-sm:w-fit w-[160px] lg:w-[180px] focus-visible:ring-0 mr-2'>
                <SelectValue placeholder='Duration'/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
               <SelectLabel>Filter by duration</SelectLabel>
                  <SelectSeparator/>
                     <SelectItem value='all'>All  </SelectItem>
                     <SelectItem value='week'>Week</SelectItem>
                     <SelectItem value='month'>Month</SelectItem>
                     {/* <SelectItem value='latest'>Latest</SelectItem> */}
                  </SelectGroup>
            </SelectContent>
         </Select>
         {step === 1 && <Select onValueChange={handleStatus} >
            <SelectTrigger className='max-sm:w-fit w-[160px] lg:w-[180px] focus-visible:ring-0 mr-2'>
               <SelectValue placeholder='Status'/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
               <SelectLabel>Filter by status</SelectLabel>
                  <SelectSeparator/>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='active'>Active</SelectItem>
                   <SelectItem value='pending'>Pending</SelectItem>
                   <SelectItem value='completed'>Completed</SelectItem>
               </SelectGroup>
   
            </SelectContent>
         </Select>}
         <Select onValueChange={handleLimit} >
            <SelectTrigger className='max-sm:w-fit w-[160px] lg:w-[180px] focus-visible:ring-0'>
                <SelectValue placeholder='Limits'/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
               <SelectLabel>Entries Per Page</SelectLabel>
                  <SelectSeparator/>
                     <SelectItem value="10">10 Entries</SelectItem>
                     <SelectItem value='20'>20 Entries</SelectItem>
                     <SelectItem value='30'>30 Entries</SelectItem>
                     {/* <SelectItem value='latest'>Latest</SelectItem> */}
                  </SelectGroup>
            </SelectContent>
         </Select>
      </div>

    </div>
  )
}
