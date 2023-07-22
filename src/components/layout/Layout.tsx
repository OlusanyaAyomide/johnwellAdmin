import React from 'react'
import Header from './Header'
import SideLayout from './SideLayout'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
   <div className=''>
      <header>
         <Header/>
         <div className="flex">
            <div className='w-[300px] max-lg:hidden shrink-0 relative bg-main'>
               <div className='sticky overflow-auto default-scroll h-screen pt-16 bg-main'>
                  <div className=''>
                     <SideLayout/>
                  </div>
               </div>
            </div>
            <div className='grow overflow-hidden paddingx pt-16'>
               {children}
            </div>
         </div>

      </header>
   </div>
  )
}
