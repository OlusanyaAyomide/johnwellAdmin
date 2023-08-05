import React, { useContext } from 'react'
import Display from './Display'
import ImageDiv from './ImageDiv'
import Allcontext from '@/store/context'


export default function PostDetail() {
  const {postDetail} = useContext(Allcontext)
  return (
    <div className='pb-6'>
       <h1 className="text-lg font-semibold uppercase my-1">Post Cac Registration Data for {postDetail.firstName} {postDetail.lastName}</h1>
          <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
            <h1 className='header'>Busines Details</h1>
            <div className='flex flex-wrap'>
              <Display text={postDetail.firstName} className='pr-2 w-6/12' label='FirstName'/>
              <Display text={postDetail.lastName} className='pl-2 w-6/12' label='lastName'/>
              <Display text={postDetail.companyName} className='w-full' label='Company Name'/>
              <Display  className="w-full" text={postDetail.description}
                 style='h-40 sm:h-40 flex items-start whitespace-normal' label='Description'/>
                 <div className="w-full">
                  <h1 className="my-6 header">Supporting Documents</h1>
                    <div className="flex flex-wrap justify-center mx-auto max-w-[750px]">
                    {postDetail.files.map((item,key)=>(
                      <div key={key} className={`border-b h-[150px] sm:h-[250px] w-6/12 border-white ${key%2===0?"border-r-2 border-r-white":""}`}>
                        <ImageDiv  text={`user upload ${key+1}`} url={item}/>
                      </div>
                    ))}
                    </div>
                 </div>
            </div>
          </div>

    </div>
  )
}
