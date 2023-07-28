import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
// import { useAppDispatch } from './Reduxhooks';
import { useToast } from '@/components/ui/use-toast';
import { useContext } from 'react';
import Allcontext from '@/store/context';
// import { useNavigate ,useLocation} from 'react-router-dom';
// import { layoutActions } from '@/store/LayoutSlice';


interface IFetchPost{
  queryKey:string,
  mutationFn:(variables:any) => Promise<any>
  onSuccess?:(data:any)=>void
  onError?:(data:any)=>void
  showError?:boolean
}
interface IGetPost{
  queryKey:string,
  queryFn:(variables:any) => Promise<any>
  onSuccess?:(data:any)=>void
  onError?:(data:any)=>void
  showError?:boolean,
  staleTime?:number
  retry?:number | boolean
}


export const usePostRequest = ({queryKey,mutationFn,onSuccess=()=>{},onError=()=>{},showError=true}:IFetchPost)=>{
  const {toast} = useToast()
  const {setStep} = useContext(Allcontext)
  const queryclient = useQueryClient()

  return useMutation({
    mutationFn:mutationFn,
    // retry:1,
    mutationKey:[{queryKey:[queryKey]}],
    onSuccess:(data)=>{
      queryclient.invalidateQueries({queryKey:[queryKey]})
      onSuccess(data)
    },
    onError:(res:AxiosError<any>)=>{
    if (res.code === "ERR_NETWORK"){
        toast({
          title:"Network error",
          description:"your connection is down",
          className:"border-2 border-red-500"
        })
    }
    if (res.code === "ERR_BAD_REQUEST" && showError){
      const errmsg = res.response?.data?.error
      toast({
        title:"Bad request",
        description:`${errmsg}`,
        className:"border-2 border-red-500",
        duration:3000
      })
      console.log(errmsg)
      if (errmsg === "Token is missing"){
        setStep(0)
      }
    }
    onError(res)
    }
  })
}

180000
export const useGetRequest = ({
  queryKey,queryFn,onSuccess=()=>{},onError=()=>{},showError=true,staleTime=30000,retry=false}:IGetPost)=>{
  const {toast} = useToast()
  const {setStep} = useContext(Allcontext)
  return useQuery({
    queryKey:[queryKey],
    staleTime:staleTime,
    refetchOnWindowFocus:false,
    retry:retry,
    queryFn,
    onSuccess,
    onError:(res:AxiosError<any>)=>{
        console.log(res.response?.data.error)

    if (res.code === "ERR_NETWORK" && showError){
        toast({
          title:"Network error",
          description:"your connection is down",
          className:"border-2 border-red-500"
        })
    }
    if (res.code === "ERR_BAD_REQUEST" && showError){
      const errmsg = res.response?.data.error
      toast({
        title:"Bad request",
        description:`${errmsg}`,
        className:"border-2 border-red-500",
        duration:3000
      })
      if (errmsg === "Unauthenticated." && showError){
          toast({
            title:"Session Expired",
            description:"Relog in to continue",
            className:"border border-yellow-500"
          })
      }
      console.log(errmsg === "Token is missing")
      console.log("Innnnn")
      if (errmsg === "Token is missing"){
        console.log("heree")
        setStep(0)}
    }
    console.log("finalll")
    onError(res)
    
    }
  }) 
}
