import React, { useContext } from 'react'
import Display from './Display'
import ImageDiv from './ImageDiv'
import Allcontext from '@/store/context'
import { dateToString } from '@/utils/contants'


export default function TaxDetail() {
  const {taxDetail} = useContext(Allcontext)
  const date = new Date(taxDetail.regDate)
  return (
    <div className='pb-6'>
       <h1 className="text-lg font-semibold uppercase my-1">Post Cac Registration Data for {taxDetail.firstName} {taxDetail.lastName}</h1>
          <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
            <h1 className='header'>Busines Details</h1>
            <div className='flex flex-wrap'>
              <Display text={taxDetail.firstName} className='pr-2 w-6/12' label='FirstName'/>
              <Display text={taxDetail.lastName} className='pl-2 w-6/12' label='lastName'/>
              <Display text={taxDetail.phone} className='pr-2 w-6/12' label='Phone Number'/>
              <Display text={taxDetail.email} className='pl-2 w-6/12' label='Email Address'/>
              <Display text={taxDetail.address} className='w-full' label='Office Address'/>
              <Display text={taxDetail.companyName} className='pr-2' label='BN - RC Number'/>
              <Display text={taxDetail.BNNumber} className='pl-2' label='BN - RC Number'/>
              <Display text={dateToString(date)} label='Registration Date' className='w-full'/>
            </div>
          </div>

    </div>
  )
}
