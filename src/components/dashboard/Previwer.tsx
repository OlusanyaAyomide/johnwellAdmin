import React, { useContext } from 'react'
import TopCards from './TopCards'
import { Icons } from '@/utils/Icons'
import Filters from './Filters'
import Allcontext from '@/store/context'

interface IPreviewer{
  text:string
  children:React.ReactNode
  all:string,
  week:string,
  month:string
  isLoading?:boolean
  loading2?:boolean
}
export default function Previewer({text,children,all,week,month,isLoading=false}:IPreviewer) {
  const mockArray =["All","active"]
  const {timeLine} = useContext(Allcontext)
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-1">{text}</h1>
      <div className='flex space-x-4 pb-4 mt-2 overflow-auto default-scroll '>
        <TopCards count={timeLine.all} text='Total entries' />
        <TopCards count={timeLine.month} text='Entries this month' />
        <TopCards count={timeLine.week} text='Entries this week' />
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
