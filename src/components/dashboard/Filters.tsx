import React from 'react'
import { Select,SelectItem,SelectTrigger, SelectValue,SelectContent,SelectLabel,SelectSeparator } from '../ui/select'
import { SelectGroup } from '@radix-ui/react-select'
import Paginator from './Paginator'


export default function Filters() {
  return (
    <div className='flex items-center max-sm:flex-wrap justify-between mb-1'>
      <Paginator total={4}/>
      <div className='grow flex justify-end'>
      <Select>
            <SelectTrigger className='w-[180px] focus-visible:ring-0 mr-2'>
                <SelectValue placeholder='Duration'/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
               <SelectLabel>Filter by duration</SelectLabel>
                  <SelectSeparator/>
                     <SelectItem value='All'>All</SelectItem>
                     <SelectItem value='Month'>Month</SelectItem>
                     <SelectItem value='Week'>Week</SelectItem>
                     <SelectItem value='latest'>Latest</SelectItem>
                  </SelectGroup>
            </SelectContent>
         </Select>
         <Select>
            <SelectTrigger className='w-[180px] focus-visible:ring-0'>
               <SelectValue placeholder='Status'/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
               <SelectLabel>Filter by status</SelectLabel>
                  <SelectSeparator/>
                  <SelectItem value='active'>active</SelectItem>
                   <SelectItem value='Pending'>Pending</SelectItem>
                   <SelectItem value='Completed'>Completed</SelectItem>
               </SelectGroup>
   
            </SelectContent>
         </Select>
      </div>

    </div>
  )
}
