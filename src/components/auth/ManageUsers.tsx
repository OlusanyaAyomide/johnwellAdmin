import React, { useContext } from 'react'
import { IManageUser } from '@/utils/interfaces'
import { useGetRequest, usePostRequest } from '../hooks/useRequestProcessor'
import { getAllUsersRequest as queryFn } from '../hooks/getrequets'
import Allcontext from '@/store/context'
import { Button } from '../ui/button'
import request from '../hooks/requests'
import { toast } from '../ui/use-toast'
import { Johnwell } from '@/utils/FullScreenLoader'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"

export default function ManageUsers() {
   const {isLoading,data,isFetching} = useGetRequest({queryKey:"get-user",queryFn})
   const {setStep,profile:{_id}} = useContext(Allcontext)
   
   const makeAdmin = (body:any)=>{
      return request.post("api/v1/user/update",body)
   }
   const mutationFn = (body:any)=>{
      return request.post("api/v1/user/delete",body)
   }

   const onSuccess = ()=>{
      toast({
         description:"Users Update succesfully",
         className:"border-green-500 border-2"
      })
      setStep(1)
   }
   const {isLoading:Loading,mutate} = usePostRequest({queryKey:"delete-user",mutationFn,onSuccess})
   const {isLoading:loading,mutate:mutatedmin} = usePostRequest({queryKey:"mak-admin",mutationFn:makeAdmin,onSuccess})
  return (
   <div>
       <h1 className="text-2xl  text-center mb-6">User Management</h1>
       {isFetching && <div className='h-5 w-5 rounded-full border-main border-[2px] fixed border-r-transparent z-50 top-4 right-16 animate-spin'></div>}
       {!isLoading && <div className='lg:pl-4'>
          <h1 className='header mb-6'>Manage Users</h1>
          {!isLoading && <div className='overflow-auto default-scroll flex-shrink-0'>
            {data?.data?.user?.map((item:IManageUser,key:number)=>{
               const substring = item.name?.substring(0,2)
               const admin = item.isAdmin
               return<div key={key} className={`mb-4 ${_id === item._id?"hidden":""} flex justify-between items-center`}>
                  <div className="rounded-full shrink-0 h-10 w-10 bg-gray-100 grid place-content-center uppercase">{substring}</div>
                  <span className='ml-2'>{item.name}</span>
                  <span className="ml-2">{item.email}</span>
                  <Button onClick={()=>{mutatedmin({_id:item._id,isAdmin:!admin})}} className='bg-main whitespace-nowrap text-sm h-7 hover:bg-blue-500 text-white ml-3'>{item.isAdmin?"revoke Admin":"make Admin"}</Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                    <Button variant={"outline"}  className='ml-3  hover:bg-red-500 hover:text-white h-7 whitespace-nowrap hover"bg-red-700'>Delete user</Button>
                     </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to delete this User?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the user from the server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel >Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>{mutate({_id:item._id})}} className='hover:bg-red-500'>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                  </AlertDialog>
               </div>
            })}
          </div>}
       </div>}
       {isLoading &&
       <div className='grid place-items-center h-full w-full'>
         <div className='h-5 w-5 rounded-full border-main border-[2px]  border-r-transparent z-50 top-4 right-16 animate-spin'></div>
       </div>
      }
      {loading && <div className='fixed w-full inset-0 h-full z-40 bg-black/5 grid place-items-center lg:pl-20'><Johnwell/></div>}
      {Loading && <div className='fixed w-full inset-0 h-full z-40 bg-black/5 grid place-items-center lg:pl-20'><Johnwell/></div>}
   </div>
  )
}
