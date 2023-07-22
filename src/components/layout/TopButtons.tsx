import React from 'react'
import { Button } from '../ui/button'
export default function TopButtons() {
  return (
    <>
        <Button className='block  max-w-[300px] font-semibold brightness-90 text-black text-base px-8 w-full mx-auto hover:bg-[#e1e0e2] bg-white h-12'>Dashboard</Button>
        <Button  className='block max-w-[300px]  h-12 w-full mx-auto hover:bg-[#0e4892] bg-[#355BCC]  px-8 border-white my-4'>Pre cac registration</Button>
        <Button 
       className='block max-w-[300px]  px-8 h-12 w-full mx-auto bg-red-500 hover:bg-[#b10000] mt-5'>Post cac registration
      </Button>
    </>
  )
}
