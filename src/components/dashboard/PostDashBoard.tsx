import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Previewer from './Previwer'
import { DemoTable, mockPost } from '@/utils/contants'
import { formatDate } from '@/utils/contants'
import { Badge } from '../ui/badge'
import { useContext } from 'react'
import Allcontext from '@/store/context'
import request from '../hooks/requests'
import { AxiosResponse } from 'axios'
import { IPostAPiresponse, IPostDetail } from '@/utils/interfaces'
import { useGetRequest } from '../hooks/useRequestProcessor'
import { Skeleton } from '../ui/skeleton'

export default function PostDashBoard() {
  
  const {Appfilters:{limit,page,duration,status},setPostDetail,setStep,
  setAppFilters,setAllPosts,allPosts,setTimeLine} = useContext(Allcontext)

  const handleDispath = (value:IPostDetail)=>{
    setPostDetail(value)
    setStep(3)
  }
  const onSuccess = (res:AxiosResponse<IPostAPiresponse>)=>{
    const {page,total} = res.data
    setAppFilters((prev)=>{return{...prev,total,page}})
    setAllPosts(res.data.data)
    setTimeLine(res.data.timeLine)

  }
  const queryFn = ()=>{
    const url =`api/v1/post?duration=${duration}&page=${page}&limit=${limit}`
    return request.get(url) as Promise<AxiosResponse<IPostAPiresponse>>
  }
  const {isLoading} = useGetRequest({queryKey:[`${limit}`,`${page}`,`${duration}`,`${status}`],
  queryFn,onSuccess,staleTime:0})
  
  const skeletonArray=[1,2,3,4]
  return (
  <Previewer text='Post Cac Registration'>
    <div className="mt-4">
      <div className="mt-1 overflow-hidden">
        <Table className='rounded-lg border border-border'>
          <TableCaption>List of filted entries</TableCaption>
              <TableHeader className='uppercase font-semibold'>
                <TableRow>
                  <TableHead className='w-fit px-1 overflow-hidden'>S/N</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Entry Date</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>First name</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Last name</TableHead>
                  <TableHead className='whitespace-nowrap text-center px-2'>Company Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {allPosts.map((item,key)=>(
                <TableRow onClick={()=>{handleDispath(item)}} key={key}>
                    <TableCell className=' text-center whitespace-nowrap'>{key+1}</TableCell>
                    <TableCell className='w-[150px] text-center whitespace-nowrap'>{formatDate(item.createdAt)}</TableCell>
                    <TableCell  className='text-center whitespace-nowrap'>{item.firstName}</TableCell>
                    <TableCell  className='text-center whitespace-nowrap'><span className='relative top-4'>{item.lastName}</span> <span className='block mt-3 opacity-0'>t</span></TableCell>
                    <TableCell  className='text-center whitespace-nowrap'>{item.companyName}</TableCell>
                </TableRow>
              ))}
              </TableBody>
        </Table>
      </div>
      {allPosts.length === 0 && isLoading && <div className='mt-6'>
            {skeletonArray.map((item)=>(
              <Skeleton className='rounded-sm h-[80px] mb-2 w-full' key={item}/>
            ))}
          </div>
        }
        {allPosts.length === 0 && !isLoading && <div className='h-[60px] grid place-items-center'>
            <div>
              <h1 className='text-lg text-center mb-2 font-medium'>All Caught up</h1>
              <h1 className='text-center'>No result matches this query</h1>
            </div>
          </div>}
    </div>
  </Previewer>
  )
}
