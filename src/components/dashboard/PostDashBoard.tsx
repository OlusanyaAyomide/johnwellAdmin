import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Previewer from './Previwer'
import { DemoTable, mockPost } from '@/utils/contants'
import { formatDate } from '@/utils/contants'
import { Badge } from '../ui/badge'


export default function PostDashBoard() {
  
  return (
  <Previewer week='2' month='6' all='72' text='Pre Cac Registration'>
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
              {mockPost.map((item,key)=>(
                <TableRow >
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
    </div>
  </Previewer>
  )
}
