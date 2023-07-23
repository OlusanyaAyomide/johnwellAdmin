export interface Iinfo{
    firstName:string
    lastName:string
    email:string
    phone:string | number
    address:string
    city:string
    zipcode:string | number 
    passport:string
    signature:string
    userid:string
    shares:string | number
  }
  
  export interface Ibusiness{
     companyName1:string
     companyName2:string
     companyName3?:string
     businessType:string
     ngoType:string
     companyDescription:string
     info:Iinfo[]
}
  
export interface IBaseInterface{
    activationKey:string,
    firstName:string 
    surName:string
    middleName:string
    email:string
    phone:number | string
    houseAdress:string
    city:string
    zipcode:number | string
    dateOfBirth:string
    business:Ibusiness
}