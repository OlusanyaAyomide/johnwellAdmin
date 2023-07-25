import React, { useMemo } from 'react'
import ImageDiv from './ImageDiv'

interface IPhotoGrid{
   userid:string
   passport:string
   signature:string
}

export default function PhotoGrid({userid,passport,signature}:IPhotoGrid) {
   const randomChoice = useMemo(()=>{
      return Math.floor(Math.random() * 2) + 1
   },[])
   
   const Type1 = ()=>(
      <div className='flex  w-full max-w-[750px]  mx-auto rounded-md overflow-hidden'>
         <div className='w-6/12 border-r-2 border-white'>
            <div className='h-[180px] border-b-2 border-white'>
               <ImageDiv url={passport} text='Passport'/>
            </div>
            <div className='h-[180px]'>
               <ImageDiv url={signature} text='signature'/>
            </div>
         </div>
         <div className='w-6/12 h-[360px]  border-l-2 '>
            <ImageDiv url={userid} text='Identification'/>
         </div>
      </div>
   )
   const Type2 = () =>(
      <div className='rounded-md  overflow-hidden w-full max-w-[750px] mx-auto'>
         <div className='border-b-2 h-[260px] border-white'>
            <ImageDiv url={signature}  text='signature'/>   
         </div>
         <div className='w-full flex'>
            <div className='h-[180px] w-6/12 border-r-2 border-white'>
             <ImageDiv text='Identification' url={userid}/>
            </div>
            <div className='h-[180px] w-6/12 border-r-2 border-white'>
               <ImageDiv  text='Passport' url={passport}/>
           </div>
         </div>
      </div>
   )
   return (
   <div className='w-full'>
      {randomChoice===1?<Type1/>:<Type2/>}
      {/* <Type2/> */}
   </div>
  )
}
