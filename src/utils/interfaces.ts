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
  
export interface ITimeline {
    week: number;
    month: number;
    all: number;
  }
  
export interface IDetail {
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
    timeLine: ITimeline;
    entrystatus: EntryStatus[];
    data: IDetail[];
}

export interface IUser{
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
}

export interface ILogIn{
  token:string
  user:{
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  }
}

export interface IFilters{
  duration:"week" | "month" | "all"
  limit:number
  page:number
  status?:"active" | "completed" | "pending" | "all"
  total:number
}
export interface IPostDetail{
  _id:string
  firstName:string
  lastName:string
  description:string
  companyName:string
  createdAt:string
  files:string[]
}

export interface IPostAPiresponse{
  status: string;
  length: number;
  page: number;
  total: number;
  timeLine: ITimeline;
  data:IPostDetail[]
}

export interface IManageUser {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  __v: number;
}


export interface ITaxDetail{
  _id: string;
  firstName:string
  lastName:string
  phone:string
  email:string
  address:string
  companyName:string
  BNNumber:string
  regDate:Date
  createdAt: string
}


export interface ITaxResponse{
  status: string;
  length: number;
  page: number;
  total: number;
  timeLine:ITimeline;
  data:ITaxDetail[];
}