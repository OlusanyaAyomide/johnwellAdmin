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
  const handleBack = ()=>{
    if(step === 4 || step ===1){setStep(1);return}
    if(step ===2 || step === 3){setStep(2);return}
    if(step ===5 || step === 8){setStep(5);return} 
    else{
      setStep(1)
    }
  }
  return (
    
    <>
        <button onClick={handleBack} className="text-center w-full underline block text-base font-semibold mb-10 hover:decoration-blue-300">Dashboard</button>
        <Button onClick={()=>{handleChange(1)}} className='block max-w-[300px]  h-12 w-full mx-auto hover:bg-[#0e4892] bg-[#355BCC]  px-8 border-white my-4'>Pre cac registration</Button>
        <Button onClick={()=>{handleChange(2)}}
       className='block max-w-[300px]  px-8 h-12 w-full mx-auto bg-[#71b0e4] hover:bg-[#0e4892] mt-5'>Post cac registration
      </Button>
      <Button onClick={()=>{handleChange(5)}}
       className='block max-w-[300px]  px-8 h-12 w-full mx-auto bg-[#2A8B2E] hover:bg-[#4ae64f]  mt-5'>TAX IDENTIFICATION NUMBER
      </Button>
    </>
  )
}
