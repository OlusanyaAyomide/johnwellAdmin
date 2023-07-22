import React from 'react'
import { Card } from '../ui/card'
import TopCards from './TopCards'
import { Icons } from '@/utils/Icons'

export default function Dashboard() {
  const mockArray =["All","In Progress"]
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration</h1>
      <div className='flex space-x-4 pb-4 mt-2 overflow-auto default-scroll '>
        <TopCards count='72' text='Total entries' />
        <TopCards count='6' text='Entries this month' />
        <TopCards count='2' text='Entries this week' />
      </div>
      <div className="flex items-center mt-1">
        {mockArray.map((item,key)=>(
          <h1 key={key} className='flex text-base items-center'>
            <span className='mr-1'>{item}</span>
            {key+1 !== mockArray.length && <Icons.double className ="mr-1 text-main"/>}
          </h1>

        ))}
      </div>
    </div>
  )
}
