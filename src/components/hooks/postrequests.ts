import { AxiosResponse } from "axios";
import request from "./requests";


export const SignInRequest = (body:{email:string,password:string})=>{
    return request.post("api/v1/user/signin",body)
}
export const updatePreRequest = (body:any)=>{
    return request.post("api/v1/preupdate",body)
}