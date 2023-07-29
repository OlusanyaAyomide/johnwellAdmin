import React, { useContext } from 'react'
import Display from './Display'
import { entryData } from '@/utils/contants'
import PhotoGrid from './PhotoGrid'
import Allcontext from '@/store/context'
import Admin from './Admin'
import  {useFormik} from "formik"
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Icons } from '@/utils/Icons'
import { formatDate } from '@/utils/contants'

export default function Detail() {
  const {activeDetail,profile:{isAdmin}} = useContext(Allcontext)
  const userDetail = {...activeDetail}
  const {setIsEditing,isEditing} = useContext(Allcontext)
  const formik = useFormik({
    initialValues:userDetail,
    onSubmit:()=>{}
  })
  const entry = formik.values
  const business = formik.values.business
  const isIT = business.businessType === 'Incorporated Trustee'
  const isLTD = business.businessType === "Limited Liability"
  console.log(formik.values)
  return (
    <div className='pb-6'>
      <div className="flex max-sm:flex-wrap justify-between mb-4">
         <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration Data for {entry.firstName} {entry.surName}</h1>
         {isAdmin && <Admin/>}
      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
        <h1 className='header'>Basic Details</h1>
        <div className='flex flex-wrap'>
          <Display formik={formik} name='firstName' text={entry.firstName} label='SurName' className='w-6/12 pr-2'/>
          <Display formik={formik} name='surName' text={entry.surName} label='First Name' className='w-6/12 pl-2'/>
          <Display formik={formik} name='middleName' text={entry.middleName} label='Middle Name' className='w-full'/>
          <Display formik={formik} name='dateOfBirth' text={formatDate(entry.dateOfBirth)} label='Date Of Birth' className='w-6/12 pr-2'/>
          <Display formik={formik} name='phone' text={entry.phone.toString()} label='Phone Number' className='w-6/12 pl-2'/>
          <Display formik={formik} name='email' type='email' text={entry.email} label='Email' className='w-full'/>
          <Display formik={formik} name='houseAdress' text={entry.houseAdress} label='Address' className='w-full'/>
          <Display formik={formik} name='city' text={entry.city} label='City' className='w-6/12 pr-2'/>
          <Display formik={formik} name='zipcode' text={entry.zipcode.toString()} label='Zipcode' className='w-6/12 pl-2'/>
        </div>
        <h1 className='header mt-6'>Business Details</h1>
        <div className="flex flex-wrap">
          <div className="w-full">
            <Display formik={formik} name='business[businessType]' text={business.businessType} label='Business Name' className='w-6/12 pr-2'/>
          </div>
            <Display formik={formik} name='business[companyName1]'  label='Company Name2' text={business.companyName1} className='pr-2 w-6/12'/>
            <Display formik={formik} name='business[companyName2]' label='Company Name2' text={business.companyName2} className='pl-2 w-6/12'/>
            {isIT
               && <Display name='business[companyName3]' formik={formik}  label='Company Names' text={business.companyName3} className='w-full'/>}
              
            {isIT && <div className="w-full">
              <Display name='business[ngoType]' formik={formik}  label="NGO Type" text={business.ngoType} className='w-6/12 pr-2' />
            </div>}
  
            <Display name='business[companyDescription]' formik={formik}  label='Business Description' text={business.companyDescription} style='h-40 sm:h-40 flex items-start whitespace-normal'/>
        </div>
        <h1 className="mt-8 header uppercase w-full ">Business Partner Details</h1>
        <div className="flex flex-wrap">
          {business.info?.map((item,key)=>(
            <div key={key} className='mb-2 flex flex-wrap'>
              <h1 className="mt-3 w-full uppercase font-semibold ml-1">Partner Detail</h1>

              <Display name={`business[info][${key}][firstName]`} 
              formik={formik} text={item.firstName} label='First Name' className='w-6/12 pr-2'/>

              <Display name={`business[info][${key}][lastName]`} 
              formik={formik} text={item.lastName}  label='Last Name' className='w-6/12 pl-2'/>

              <Display name={`business[info][${key}][email]`}
               type='email' formik={formik} text={item.email} label='Email Address' className='w-6/12 pr-2'/>

              <Display name={`business[info][${key}][phone]`}
               formik={formik} text={item.phone?.toString()}  label='Phone Number' className='w-6/12 pl-2'/>

              <Display name={`business[info][${key}][address]`}
               formik={formik} text={item.address} label='Office Adress' className='w-full'/>

              <Display name={`business[info][${key}][city]`} 
              formik={formik} text={item.city} label='City' className='w-6/12 pr-2'/>

              <Display name={`business[info][${key}][zipcode]`} 
              formik={formik} text={item.zipcode?.toString()}  label='Region Code' className='w-6/12 pl-2'/>

              {isLTD && <div className="w-full">
                <Display name={`business[info][${key}][shares]`} 
                formik={formik} text={item.shares?.toString()} label='Shares held' className='w-6/12 pr-2'/>
              </div>}
              {business.businessType === "Limited Liability" && 
                <Display name={`business[info][${key}][address]`} 
                 formik={formik} text={item.address} label='Office Adress' className='w-full'/>}
              <div className='w-full mt-6'>
                <PhotoGrid userid={item.userid} imagename={formik.values.firstName} signature={item.signature} passport={item.passport}/>
              </div>

            </div>
          ))}
          {isEditing && <>
          <Separator className='my-12'/>   
            <div className="flex justify-between text-  w-full max-w-[750px] mx-auto">
               <Button type="button" onClick={()=>{
                formik.resetForm();setIsEditing(false)
               }} className='flex bg-red-500 hover:bg-red-600'>
                  <span>Cancel</span> <span className='ml-6'><Icons.trash/></span>
               </Button>
               <Button className='bg-main hover:bg-blue-600'>
                <span>Save</span> <span className='ml-6'><Icons.save/></span>
               </Button>
            </div>   
          </>}
   
        </div>
      </div>

      </form>
    </div>
  )
}
