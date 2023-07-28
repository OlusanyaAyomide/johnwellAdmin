import { Icons } from '@/utils/Icons';
import React, { useState } from 'react'

export default function Paginator({total}:{total:number}){
  const [active,setActive]= useState(1)
  const page=2
  const getArray = ()=>{
    let result=[]
    for (let i = 0; i <= 3; i++) {
      result.push(i);
    }
    return result
  }
  const numList = getArray()
  return (
    <div className='w-fit'>
      <div className='flex max-sm:mb-3 items-center mr-3'>
        <button className='text-xl'><Icons.left/></button>
        {numList.map((item,key)=>(
          <div key={key} className={`rounded-md ${item+active === page?"bg-main text-white":"bg-gray-200 text-shade"} grid place-content-center h-[20px] font-medium w-[20px] mr-1`}>
            {item + active}
          </div>
     ))}
        <button onClick={()=>{setActive((prev=>prev+1))}} className='text-xl'><Icons.right/></button>
    </div>
    </div>

  )
}
