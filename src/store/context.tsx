import { IDetail, IFilters, ITimeline, IUser } from "@/utils/interfaces"
import React, { createContext,useState } from "react"

export interface IStepInterface{
    businesType:string
}
const initialFilters:IFilters={
    type:"pre",
    status:"all",
    duration:"all",
    limit:10,
    page:1,
    total:3
}
export interface ContextType{
    businessType:string
    setBusinessType:React.Dispatch<React.SetStateAction<string>>
    isEditing:boolean
    setIsEditing:React.Dispatch<React.SetStateAction<boolean>>
    filterArray:string[]
    setFilters:React.Dispatch<React.SetStateAction<string[]>>
    step:number,
    setStep:React.Dispatch<React.SetStateAction<number>>
    profile:IUser,
    setProfile:React.Dispatch<React.SetStateAction<IUser>>,
    Appfilters:IFilters,
    setAppFilters:React.Dispatch<React.SetStateAction<IFilters>>,
    setActiveDetail:React.Dispatch<React.SetStateAction<IDetail>>,
    activeDetail:IDetail
    allPreData:IDetail[]
    setallPreData:React.Dispatch<React.SetStateAction<IDetail[]>>,
    timeLine:ITimeline
    setTimeLine:React.Dispatch<React.SetStateAction<ITimeline>>
    // firstLoad:boolean,
    // setFirstLoad:React.Dispatch<React.SetStateAction<boolean>>
    
       
}

export const Allcontext = createContext<ContextType>({} as ContextType)


export const AllContextProvider =(children:any)=>{
    const [businessType,setBusinessType] = useState("All")
    const [isEditing,setIsEditing] = useState(false)
    const [filterArray,setFilters] = useState<string[]>([])
    const [step,setStep] = useState(1)
    const [profile,setProfile] = useState<IUser>({} as IUser)
    const [Appfilters,setAppFilters] = useState<IFilters>(initialFilters)
    const [activeDetail,setActiveDetail] = useState<IDetail>({} as IDetail)
    const [allPreData,setallPreData] = useState<IDetail[]>([])
    const [timeLine,setTimeLine] = useState<ITimeline>({} as ITimeline)



    const context = {
        businessType,setBusinessType,setIsEditing,isEditing,filterArray,setFilters,step,setStep,profile,setProfile,
        Appfilters,setAppFilters,activeDetail,setActiveDetail,allPreData,setallPreData,timeLine,setTimeLine
    }
    return <Allcontext.Provider value={context}>{children.children}</Allcontext.Provider>
    
}

export default Allcontext
