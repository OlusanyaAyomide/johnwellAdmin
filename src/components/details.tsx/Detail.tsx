import React, { useContext } from 'react'
import Display from './Display'
import { Johnwell } from '@/utils/FullScreenLoader'
import PhotoGrid from './PhotoGrid'
import Allcontext from '@/store/context'
import Admin from './Admin'
import  {useFormik} from "formik"
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Icons } from '@/utils/Icons'
import { dateToString, formatDate } from '@/utils/contants'
import { Badge } from '../ui/badge'
import { updatePreRequest as mutationFn } from '../hooks/postrequests'
import { usePostRequest } from '../hooks/useRequestProcessor'
import { AxiosResponse } from 'axios'
import { IDetail } from '@/utils/interfaces'
import { toast } from '../ui/use-toast'

export default function Detail() {
  const {activeDetail,profile:{isAdmin}} = useContext(Allcontext)
  const userDetail = {...activeDetail}
  const {setIsEditing,isEditing,setActiveDetail,setStep} = useContext(Allcontext)
  const formik = useFormik({
    initialValues:userDetail,
    enableReinitialize:true,
    onSubmit:()=>{}
  })
  const onSuccess = (res:AxiosResponse<{data:IDetail}>)=>{
    setActiveDetail(res.data.data)   
    toast({
      description:"Change Succesful",
      className:"border-2 border-green-500",
    })
    setIsEditing(false)
  }
  const entry = formik.values
  console.log(entry)
  const business = formik.values.business
  const isIT = business.businessType === 'Incorporated Trustee'
  const isLTD = business.businessType === "Limited Liability"
  const {mutate,isLoading} = usePostRequest({queryKey:"update-pre",mutationFn,onSuccess})
  console.log(entry.dateOfBirth)

  return (
    <div className='pb-6'>
          <button className="cursor-pointer lg:hidden text-xl block" onClick={()=>{setStep(1)}}>
          <Icons.back/>
        </button>
      <div className="flex max-sm:flex-wrap justify-between mb-1">
         <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration Data for {entry.firstName} {entry.surName}</h1>
         {isAdmin && <Admin/>}
      </div>
      <div className="mb-3">
        <Badge className={`ml-2 ${entry.status === "active"?"bg-main px-6":entry.status ==="pending"?"bg-yellow-500 px-5":"bg-green-500"}`}>{entry.status}</Badge>
      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className='rounded-lg mx-2 border-border/50 border mb-6 shadow-md py-8 px-2'>
        <h1 className='header'>Basic Details</h1>
        <div className='flex flex-wrap'>
          <div className="w-full">
            <Display formik={formik} name='activationKey' text={entry.activationKey} label='Activation Key' className='w-6/12 pr-2'/>
          </div>
          <Display formik={formik} name='firstName' text={entry.firstName} label='SurName' className='w-6/12 pr-2'/>
          <Display formik={formik} name='surName' text={entry.surName} label='First Name' className='w-6/12 pl-2'/>
          <Display formik={formik} name='middleName' text={entry.middleName} label='Middle Name' className='w-full'/>
          <Display formik={formik} name='dateOfBirth' disabled={true}
          text={formatDate(entry.dateOfBirth)} label='Date Of Birth' className='w-6/12 pr-2'/>
          <Display formik={formik} name='phone' text={entry.phone.toString()} label='Phone Number' className='w-6/12 pl-2'/>
          <Display formik={formik} name='email' type='email' text={entry.email} label='Email' className='w-full'/>

          <Display formik={formik} name='streetName' text={entry.streetName} label='StreetName' className='w-full'/>
          <Display formik={formik} name='houseNumber' text={entry.houseNumber} label='HouseNumber' className='pr-2 w-6/12'/>
          <Display formik={formik} name='city' text={entry.city} label='City' className='pl-2 w-6/12'/>    
          <Display formik={formik} name='state' text={entry.state} label='state' className='pr-2 w-6/12'/>
          {isLTD && <Display formik={formik} name='shares' text={`${entry.shares} %`} label='Shares' className='w-6/12 pl-2'/>}
          <div className='w-full mt-6'>
              <PhotoGrid userid={entry.userid} imagename={formik.values.firstName} signature={entry.signature} passport={entry.passport}/>
            </div>

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
        {business.info.length>0 && <h1 className="mt-8 header capitalize w-full ">Other Business Partners Details</h1>}
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

              <Display name={`business[info][${key}][officeStreet]`}
               formik={formik} text={item.officeStreet} label='Office StreetName' className='w-full'/>


              <Display name={`business[info][${key}][city]`} 
              formik={formik} text={item.city} label='City' className='w-6/12 pr-2'/>
              
              <Display name={`business[info][${key}][state]`} 
              formik={formik} text={item.state} label='State' className='w-6/12 pl-2'/>
         
              <Display name={`business[info][${key}][officeNumber]`} 
              formik={formik} text={item.officeNumber} label='Office Number' className='w-6/12 pr-2'/>

              <Display name={`business[info][${key}][dateOfBirth]`} disabled={true} 
              formik={formik} text={formatDate(item.dateOfBirth)}  label='Date Of Birth' className='w-6/12 pl-2'/>

              {isLTD && <div className="w-full">
                <Display name={`business[info][${key}][shares]`} 
                formik={formik} text={item.shares?.toString()} label='Shares held' className='w-6/12 pr-2'/>
              </div>}

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
               <Button type='submit' onClick={()=>{mutate(formik.values)}} className='bg-main hover:bg-blue-600'>
                <span>Save</span> <span className='ml-6'><Icons.save/></span>
               </Button>
            </div>   
          </>}
        </div>
      </div>
      </form>
      {isLoading && <div className='fixed z-50 inset-0 grid place-content-center bg-black/20'>
          <div className="relative lg:left-12 ">
          <Johnwell/>
          </div>
            </div>}
    </div>
  )
}
