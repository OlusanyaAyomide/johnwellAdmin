import { AxiosResponse } from "axios";
import request from "./requests";

export const getProfileRequest = ()=>{
    return request.get("api/v1/user/profile")
}