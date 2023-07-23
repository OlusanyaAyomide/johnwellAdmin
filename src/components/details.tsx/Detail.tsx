import React from 'react'
import Display from './Display'
import { entryData } from '@/utils/contants'
import PhotoGrid from './PhotoGrid'

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
          <Display text={entry.surName} label='First Name' className='w-6/12 pl-2'/>
          <Display text={entry.middleName} label='Middle Name' className='w-full'/>
          <Display text={entry.dateOfBirth} label='Date Of Birth' className='w-6/12 pr-2'/>
          <Display text={entry.phone.toString()} label='Phone Number' className='w-6/12 pl-2'/>
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
            <Display label='Company Name2' text={business.companyName1} className='pr-2 w-6/12'/>
            <Display label='Company Name2' text={business.companyName2} className='pl-2 w-6/12'/>
            {business.businessType === "Incorporated Trustee" && <div className="w-full">
              <Display label="NGO Type" text={business.ngoType} className='w-6/12 pr-2' />
            </div>}
            {business.businessType === "Limited Liability"
               && <Display label='Company Names' text={business.companyName3} className='w-full'/>}
            <Display label='Business Description' text={business.companyDescription} style='h-40 sm:h-40 flex items-start whitespace-normal'/>
        </div>
        <h1 className="mt-8 header uppercase w-full ">Business Partner Details</h1>
        <div className="flex flex-wrap">
          {business.info.map((item,key)=>(
            <div key={key} className='mb-2 flex flex-wrap'>
              <h1 className="mt-3 w-full uppercase font-semibold ml-1">Partner Detail</h1>
              <Display text={item.firstName} label='First Name' className='w-6/12 pr-2'/>
              <Display text={item.lastName}  label='Last Name' className='w-6/12 pl-2'/>
              <Display text={item.email} label='Email Address' className='w-6/12 pr-2'/>
              <Display text={item.phone.toString()}  label='Phone Number' className='w-6/12 pl-2'/>
              <Display text={entry.houseAdress} label='Office Adress' className='w-full'/>
              <Display text={item.city} label='City' className='w-6/12 pr-2'/>
              <Display text={item.zipcode.toString()}  label='Region Code' className='w-6/12 pl-2'/>
              {business.businessType === "Limited Liability" && <Display text={item.shares.toString()} label='Office Adress' className='w-full'/>}
              <div className='w-full mt-6'>
                <PhotoGrid userid={item.userid} signature={item.signature} passport={item.passport}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
