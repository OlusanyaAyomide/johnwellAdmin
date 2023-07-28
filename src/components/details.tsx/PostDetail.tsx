import React from 'react'
import Display from './Display'
import { PostImgDemo } from '@/utils/contants'
import ImageDiv from './ImageDiv'

export default function PostDetail() {
  return (
    <div className='pb-6'>
       <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration Data for Olusanya Ayomide</h1>
          <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
            <h1 className='header'>Busines Details</h1>
            <div className='flex flex-wrap'>
              <Display text='Johnson' className='pr-2 w-6/12' label='FirstName'/>
              <Display text='Helen Paul' className='pl-2 w-6/12' label='FirstName'/>
              <Display text='JohnPaul Companies' className='w-full' label='Business Name'/>
              <Display  className="w-full" text='Demo Text for my sqy dhd and western big head'
                 style='h-40 sm:h-40 flex items-start whitespace-normal' label='Description'/>
                 <div className="w-full">
                  <h1 className="my-6 header">Supporting Documents</h1>
                    <div className="flex flex-wrap justify-center mx-auto max-w-[750px]">
                    {PostImgDemo.map((item,key)=>(
                      <div key={key} className={`border-b h-[150px] sm:h-[250px] w-6/12 border-white ${key%2===0?"border-r-2 border-r-white":""}`}>
                        <ImageDiv text={`user upload ${key+1}`} url={item}/>
                      </div>
                    ))}
                    </div>
                 </div>
            </div>
          </div>

    </div>
  )
}
