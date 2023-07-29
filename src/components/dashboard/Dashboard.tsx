import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { DemoTable } from '@/utils/contants'
import { formatDate } from '@/utils/contants'
import { Badge } from '../ui/badge'
import Previewer from './Previwer'
import { Skeleton } from '../ui/skeleton'
import { useContext } from 'react'
import Allcontext from '@/store/context'
import request from '../hooks/requests'
import { useGetRequest } from '../hooks/useRequestProcessor'
import { IApiResponse, IDetail } from '@/utils/interfaces'
import { AxiosResponse } from 'axios'


export default function Dashboard() {
  // const isLoading = false
  const {Appfilters:{limit,page,duration,status},setActiveDetail,setStep,
  setAppFilters,setallPreData,allPreData,setTimeLine} = useContext(Allcontext)
  const onSuccess = (res:AxiosResponse<IApiResponse>)=>{
    const {page,total} = res.data
    setAppFilters((prev)=>{return{...prev,total,page}})
    setallPreData(res.data.data)
    setTimeLine(res.data.timeLine)
  }
  const handleDispath = (value:IDetail)=>{
    setActiveDetail(value)
    setStep(4)
  }
  const queryFn = ()=>{
    const url =`api/v1/pre?duration=${duration}&page=${page}&limit=${limit}${status==="all"?"":`&status=${status}`}`
    console.log(url)
    return request.get(url) as Promise<AxiosResponse<IApiResponse>>
  }
  const {isLoading,data,isFetching} = useGetRequest({queryKey:[`${limit}`,`${page}`,`${duration}`,`${status}`],
  queryFn,onSuccess,staleTime:0})
  console.log(data,isFetching,isLoading)

  const skeletonArray=[1,2,3,4]
  return (
      <Previewer week={data?.data?.timeLine?.week} month={data?.data?.timeLine?.month} isLoading={isLoading} all={data?.data?.timeLine?.all} text='Pre Cac Registration'>
      <div className='mt-4'>
      {isLoading && <div className='h-5 w-5 rounded-full border-main border-[2px] fixed border-r-transparent z-50 top-4 right-16 animate-spin'></div>}
          {allPreData.length > 0  && <div className="mt-1 overflow-hidden">
            <Table className='rounded-lg border border-border'>
              <TableCaption>List of filted entries</TableCaption>
              <TableHeader className='uppercase font-semibold'>
                <TableRow>
                  <TableHead className='w-fit px-1 overflow-hidden'>S/N</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Entry Date</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Status</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>First name</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Surname</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>email</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Business Type</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Company Name 1</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Company Name 2</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPreData.map((item:any,key:number)=>(
                  <TableRow onClick={()=>{handleDispath(item)}} key={key} className={`text-shade hover:text-black cursor-pointer hover:bg-[#71b0e4]/10 ${key%2===0?"bg-gray-200/20":""}`}>
                      <TableCell className=' text-center whitespace-nowrap'>{key+1}</TableCell>
                      <TableCell className='w-[150px] text-center whitespace-nowrap'>{formatDate(item.createdAt)}</TableCell>
                      <TableCell className='whitespace-nowrap '>
                        <Badge className={`text-white ${item.status === "active"?"bg-main px-6":item.status ==="pending"?"bg-yellow-500 px-5":"bg-green-500"}`}>{item.status}</Badge>
                      </TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.firstName}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'><span className='relative top-4'>{item.surName}</span> <span className='block mt-3 opacity-0'>t</span></TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.email}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.business?.businessType}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.business?.companyName1}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.business?.companyName2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>}
          {allPreData.length === 0 && <div className='mt-6'>
            {skeletonArray.map((item)=>(
              <Skeleton className='rounded-sm h-[80px] mb-2 w-full' key={item}/>
            ))}
          </div>
          }

      </div>
      </Previewer>
  )
}
