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


interface EntryStatus {
    _id: string;
    count: number;
  }
  
  interface BusinessInfo {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    passport: string;
    signature: string;
    userid: string;
    shares: string;
  }
  
  interface Business {
    _id: string;
    companyName1: string;
    companyName2: string;
    companyName3: string;
    businessType: string;
    ngoType: string;
    companyDescription: string;
    info: BusinessInfo[];
  }
  
  interface Timeline {
    week: number;
    month: number;
    all: number;
  }
  
  interface Data {
    _id: string;
    activationKey: string;
    firstName: string;
    surName: string;
    middleName: string;
    email: string;
    phone: string;
    houseAdress: string;
    city: string;
    zipcode: string;
    dateOfBirth: string;
    status: string;
    business: Business;
    createdAt: string;
  }
  
export interface IApiResponse {
    status: string;
    length: number;
    page: number;
    total: number;
    timeLine: Timeline;
    entrystatus: EntryStatus[];
    data: Data[];
  }
