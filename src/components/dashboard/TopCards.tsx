import React from 'react'
import { Card } from '../ui/card'

interface ITopCards{
    count:string
    text:string

}
export default function TopCards({count,text}:ITopCards) {
  return (
    <Card className='w-[240px] shrink-0 py-16 flex place-content-center cursor-pointer'>
    <div>
      <h1 className="font-extrabold text-center text-5xl text-main">{count}</h1>
      <h1 className="text-center text-base mt-[2px]">{text}</h1>
    </div>
  </Card>
  )
}
