import React from 'react'
import {ThreeCircles} from "react-loader-spinner"


export const Johnwell = ()=>{
  return(
  <div className='flex animate items-center mb-10 animate-pulse  text-shade text-5xl font-semibold'>
    <span>J</span>
    <ThreeCircles
    height="50"
    width="50"
    color="#022C7B"
    wrapperStyle={{}}
    ariaLabel="three-circles-rotating"
    />
    <span>hnwell</span>
</div>  
  )
}
export default function FullScreenLoader() {

  return (
    <div className='w-screen h-screen grid place-content-center'>
      <Johnwell/>
    </div>
  )
}
