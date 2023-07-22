import { createContext,useState } from "react"

export interface IStepInterface{
    businesType:string
}
export interface ContextInterface{
    businessType:string
    setBusinessType:React.Dispatch<React.SetStateAction<string>>
}

export const Allcontext = createContext<ContextInterface  | null>(null)


export const AllContextProvider =(children:any)=>{
    const [businessType,setBusinessType] = useState("All")


    const context = {
        businessType,setBusinessType   
    }
    return <Allcontext.Provider value={context}>{children.children}</Allcontext.Provider>
    

    // return <Allcontext.Provider value={context}>{children.children}</Allcontext.Provider>
}
