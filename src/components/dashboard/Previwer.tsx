import React from 'react'
import TopCards from './TopCards'
import { Icons } from '@/utils/Icons'
import Filters from './Filters'

interface IPreviewer{
  text:string
  children:React.ReactNode
  all:string,
  week:string,
  month:string
}
export default function Previewer({text,children,all,week,month}:IPreviewer) {
  const mockArray =["All","active"]
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-1">{text}</h1>
      <div className='flex space-x-4 pb-4 mt-2 overflow-auto default-scroll '>
        <TopCards count={all} text='Total entries' />
        <TopCards count={week} text='Entries this month' />
        <TopCards count={month} text='Entries this week' />
      </div>
      <div className="flex items-center mt-1">
        {mockArray.map((item,key)=>(
          <h1 key={key} className='flex text-base items-center'>
            <span className='mr-1'>{item}</span>
            {key+1 !== mockArray.length && <Icons.double className ="mr-1 text-main"/>}
          </h1>
        ))}
      </div>
      <div className='mt-4'>
      <Filters/>
      {children}
    </div>
    </div>
  )
}
