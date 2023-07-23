import React from 'react'
import Display from './Display'
import { entryData } from '@/utils/contants'

export default function Detail() {
  const entry = {...entryData}
  const business = entry.business
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration Data for {entry.firstName} {entry.surName}</h1>
      <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
        <h1 className='header'>Basic Details</h1>
        <div className='flex flex-wrap'>
          <Display text={entry.firstName} label='SurName' className='w-6/12 pr-2'/>
          <Display text={entry.surName} label='FirstName' className='w-6/12 pl-2'/>
          <Display text={entry.middleName} label='MiddleName' className='w-full'/>
          <Display text={entry.dateOfBirth} label='Date Of Birth' className='w-6/12 pr-2'/>
          <Display text={entry.phone.toString()} label='Phone' className='w-6/12 pl-2'/>
          <Display text={entry.email} label='Email' className='w-full'/>
          <Display text={entry.houseAdress} label='Address' className='w-full'/>
          <Display text={entry.city} label='City' className='w-6/12 pr-2'/>
          <Display text={entry.zipcode.toString()} label='Zipcode' className='w-6/12 pl-2'/>
        </div>
        <h1 className='header mt-6'>Business Details</h1>
        <div className="flex flex-wrap">
          <div className="w-full">
            <Display label={business.businessType} text='Business Name' className='w-6/12 pr-2'/>
          </div>
            <Display label={business.companyName1} text='Company Name 1' className='pr-2 w-6/12'/>
            <Display label={business.companyName2} text='Company Name 2' className='pl-2 w-6/12'/>
            {business.companyName3 === "Limited Liability"
               && <Display label='Company Names' text='Company Name 3' className='w-full'/>}
            <Display label='Business Description' text={business.companyDescription} style='h-40 sm:h-40 flex items-start whitespace-normal'/>
        </div>
        <div className="mt-6 header">Business Partner Details</div>
        
        <div className="flex flex-wrap">

        </div>
      </div>
    </div>
  )
}
