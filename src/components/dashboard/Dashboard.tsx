import React from 'react'
import { Card } from '../ui/card'
import TopCards from './TopCards'
import { Icons } from '@/utils/Icons'
import Filters from './Filters'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { DemoTable } from '@/utils/contants'
import { formatDate } from '@/utils/contants'
import { Badge } from '../ui/badge'

export default function Dashboard() {
  const mockArray =["All","In Progress"]
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-1">Pre Cac Registration</h1>
      <div className='flex space-x-4 pb-4 mt-2 overflow-auto default-scroll '>
        <TopCards count='72' text='Total entries' />
        <TopCards count='6' text='Entries this month' />
        <TopCards count='2' text='Entries this week' />
      </div>
      <div className="flex items-center mt-1">
        {mockArray.map((item,key)=>(
          <h1 key={key} className='flex text-base items-center'>
            <span className='mr-1'>{item}</span>
            {key+1 !== mockArray.length && <Icons.double className ="mr-1 text-main"/>}
          </h1>
        ))}
      </div>
      <div className='mt-4'>
          <Filters/>
          <div className="mt-1 overflow-hidden">
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
                {DemoTable.map((item,key)=>(
                  <TableRow key={key} className={`text-shade hover:text-black cursor-pointer hover:bg-[#71b0e4]/10 ${key%2===0?"bg-gray-200/20":""}`}>
                      <TableCell className=' text-center whitespace-nowrap'>{key}</TableCell>
                      <TableCell className='w-[150px] text-center whitespace-nowrap'>{formatDate(item.createdAt)}</TableCell>
                      <TableCell className='whitespace-nowrap '>
                        <Badge className={`text-white ${item.status === "In progress"?"bg-main":item.status ==="Pending"?"bg-yellow-500 px-5":"bg-green-500"}`}>{item.status}</Badge>
                      </TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.firstName}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'><span className='relative top-4'>{item.surName}</span> <span className='block mt-3 opacity-0'>t</span></TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.email}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.businessType}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.companyName1}</TableCell>
                      <TableCell  className='text-center whitespace-nowrap'>{item.companyName2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </div>

    </div>
  )
}
