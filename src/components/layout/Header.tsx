import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { Icons } from '@/utils/Icons'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import SideLayout from './SideLayout'

export default function Header() {
   const InputDiv = ()=>(
      <div className='flex w-full md:max-w-[350px] lg:max-w-[450px] relative'>
         <Input placeholder="search" className={'focus-visible:ring-0 peer text-base focus:px-2 px-8 w-full'}/>
         <span className='absolute hidden md:block text-main peer-focus:hidden text-2xl bottom-[8px] left-[5px]'>
            <Icons.search/>
         </span>
      </div>

   )
  return (
    <div className='bg-background z-40 shadow-sm fixed w-full top-0 py-2 left-0 paddingx flex items-center '>
      <div  className='flex-center'>
         <Sheet>
            <SheetTrigger>
               <Icons.menu className ="icon-class md:block lg:hidden"/>
            </SheetTrigger>
            <SheetContent className='bg-main px-0 w-[300px] overflow-auto default-scroll lg:hidden' side={'left'}>
               <SideLayout/>
            </SheetContent>
         </Sheet>

       <h1 className='font-semibold text-xl sm:text-2xl'>JohnWellforms</h1>
      </div>
      <div className="grow px-2 flex justify-center opacity-0 md:opacity-100">
         <InputDiv/>
      </div>
      <div className='ml-2 flex-center'>
         <Popover>
            <PopoverTrigger>
               <Icons.search className="icon-class text-2xl" />
            </PopoverTrigger>
            <PopoverContent className="relative right-8 z-40 top-4 w-[340px] ">
               <h1 className="font-semiold mb-2 ml-1">Search</h1>
               <InputDiv/>
            </PopoverContent>
         </Popover>
         <div className="rounded-full h-10 w-10 bg-gray-100 grid place-content-center">AB</div>
      </div>
    </div>
  )
}
