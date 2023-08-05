import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Previewer from './Previwer'
import { formatDate } from '@/utils/contants'
import { useContext } from 'react'
import Allcontext from '@/store/context'
import request from '../hooks/requests'
import { AxiosResponse } from 'axios'
import { IPostAPiresponse, IPostDetail, ITaxDetail, ITaxResponse } from '@/utils/interfaces'
import { useGetRequest } from '../hooks/useRequestProcessor'
import { Skeleton } from '../ui/skeleton'
// import { ITaxDetail,ITaxResponse } from '@/utils/interfaces'

export default function TaxDashBoard() {
  
  const {Appfilters:{limit,page,duration,status},setStep,
  setAppFilters,setTimeLine,setAllTax,allTax,setTaxDetail} = useContext(Allcontext)

  const handleDispath = (value:ITaxDetail)=>{
    setTaxDetail(value)
    setStep(8)
  }
  const onSuccess = (res:AxiosResponse<ITaxResponse>)=>{
    const {page,total} = res.data
    setAppFilters((prev)=>{return{...prev,total,page}})
    setAllTax(res.data.data)
    setTimeLine(res.data.timeLine)

  }
  const queryFn = ()=>{
    const url =`api/v1/tax?duration=${duration}&page=${page}&limit=${limit}`
    return request.get(url) as Promise<AxiosResponse<ITaxResponse>>
  }
  const {isLoading,isFetching} = useGetRequest({queryKey:[`tax-${limit}`,`${page}`,`${duration}`,`${status}`],
  queryFn,onSuccess,staleTime:0})
  
  const skeletonArray=[1,2,3,4]
  return (
  <Previewer text='FIRS - TAX IDENTIFICATION NUMBER'>
    {isFetching && <div className='h-5 w-5 rounded-full border-main border-[2px] fixed border-r-transparent z-50 top-4 right-16 animate-spin'></div>}
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
              {allTax.map((item,key)=>(
                <TableRow onClick={()=>{handleDispath(item)}} key={key} className={`text-shade hover:text-black cursor-pointer hover:bg-[#71b0e4]/10 ${key%2===0?"bg-gray-200/20":""}`}>
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
      {allTax.length === 0 && isLoading && <div className='mt-6'>
            {skeletonArray.map((item)=>(
              <Skeleton className='rounded-sm h-[80px] mb-2 w-full' key={item}/>
            ))}
          </div>
        }
        {allTax.length === 0 && !isLoading && <div className='h-[60px] grid place-items-center'>
            <div>
              <h1 className='text-lg text-center mb-2 font-medium'>All Caught up</h1>
              <h1 className='text-center'>No result matches this query</h1>
            </div>
          </div>}
    </div>
  </Previewer>
  )
}
