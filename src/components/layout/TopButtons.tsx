import React from 'react'
import { Button } from '../ui/button'
import Allcontext from '@/store/context'
import { useContext } from 'react'
import { initialFilters } from '@/store/context'
export default function TopButtons() {
  const {setStep,step,setAppFilters} = useContext(Allcontext)
  const handleChange = (num:number)=>{
    setAppFilters(initialFilters)
    setStep(num)  
  }
  return (
    
    <>
        <button onClick={()=>{setStep(step===4?1:2)}} className="text-center w-full underline block text-base font-semibold mb-10 hover:decoration-blue-300">Dashboard</button>
        <Button onClick={()=>{handleChange(1)}} className='block max-w-[300px]  h-12 w-full mx-auto hover:bg-[#0e4892] bg-[#355BCC]  px-8 border-white my-4'>Pre cac registration</Button>
        <Button onClick={()=>{handleChange(2)}}
       className='block max-w-[300px]  px-8 h-12 w-full mx-auto bg-[#71b0e4] hover:bg-[#0e4892] mt-5'>Post cac registration
      </Button>
    </>
  )
}
