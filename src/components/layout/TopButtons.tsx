import React from 'react'
import { Button } from '../ui/button'
export default function TopButtons() {
  return (
    <>
        {/* <Button className='block  max-w-[300px] font-semibold brightness-90 text-black text-base px-8 w-full mx-auto hover:bg-[#e1e0e2] bg-white h-12'>Dashboard</Button> */}
        <button className="text-center w-full underline block text-base font-semibold mb-10 hover:decoration-blue-300">Dashboard</button>
        <Button  className='block max-w-[300px]  h-12 w-full mx-auto hover:bg-[#0e4892] bg-[#355BCC]  px-8 border-white my-4'>Pre cac registration</Button>
        <Button 
       className='block max-w-[300px]  px-8 h-12 w-full mx-auto bg-[#71b0e4] hover:bg-[#0e4892] mt-5'>Post cac registration
      </Button>
    </>
  )
}
