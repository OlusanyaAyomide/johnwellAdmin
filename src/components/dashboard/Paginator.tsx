import Allcontext from '@/store/context';
import { Icons } from '@/utils/Icons';
import React, { useContext, useState } from 'react'

export default function Paginator(){
  const {Appfilters:{page,total},setAppFilters} = useContext(Allcontext)

  const handleBackward =()=>{
    const newPage = page-1
    setAppFilters((prev)=>{return{...prev,page:newPage}})
  }
  const handleForward = ()=>{
    const newPage = page+1  
    setAppFilters((prev)=>{return{...prev,page:newPage}})
  }
  const getArray = ()=>{
    let result=[]
    for (let i = 0; i <= 3; i++) {
      if(i < total){
        result.push(i);
      }

    }
    return result
  }
  const numList = getArray()
  return (
    <div className='w-fit'>
      <div className='flex max-sm:mb-3 items-center mr-3'>
        <button onClick={handleBackward} disabled={page===1} className='text-xl'><Icons.left/></button>
          <div  className={`rounded-sm bg-gray-300  grid place-content-center h-[20px] font-medium w-[20px] mr-1`}>
            {page}
          </div>
        <button disabled={page===total} onClick={handleForward} className='text-xl'><Icons.right/></button>
        <span className="font-medium text-xs">Total {total}</span>
    </div>
    </div>

  )
}
