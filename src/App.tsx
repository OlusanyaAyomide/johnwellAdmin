import React, { useContext } from 'react'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import Detail from './components/details.tsx/Detail'
import PostDashBoard from './components/dashboard/PostDashBoard'
import PostDetail from './components/details.tsx/PostDetail'
import Allcontext from './store/context'
import LogIn from './components/auth/LogIn'
import { getProfileRequest as queryFn } from './components/hooks/getrequets'
import { useGetRequest, usePostRequest } from './components/hooks/useRequestProcessor'
import FullScreenLoader from './utils/FullScreenLoader'
import { AxiosResponse } from 'axios'

export default function () {
  const Loading =true
  const {setStep} = useContext(Allcontext)

  const onError = (res:AxiosResponse<any>)=>{
      setStep(0)
  }
  const {step} = useContext(Allcontext)
  const {isLoading} = useGetRequest({queryKey:"get-info-detail",queryFn,onError,showError:false})
  return (
    <>
        {!isLoading && <>
          {step >0 && <Layout>
          {step ===1 &&<Dashboard/>}
          {step === 2 && <PostDashBoard/>}
          {step === 3 &&  <PostDetail/>}
          {step === 4 && <Detail/>}
         </Layout>}
           {step ===0 && <LogIn/>}
           </>}
           <>{isLoading && <FullScreenLoader/>}</>
    </>


  )
}