import React, { createContext,useState } from "react"

export interface IStepInterface{
    businesType:string
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
       
}

export const Allcontext = createContext<ContextType>({} as ContextType)


export const AllContextProvider =(children:any)=>{
    const [businessType,setBusinessType] = useState("All")
    const [isEditing,setIsEditing] = useState(false)
    const [filterArray,setFilters] = useState<string[]>([])
    const [step,setStep] = useState(1)


    const context = {
        businessType,setBusinessType,setIsEditing,isEditing,filterArray,setFilters,step,setStep
    }
    return <Allcontext.Provider value={context}>{children.children}</Allcontext.Provider>
    
}

export default Allcontext
