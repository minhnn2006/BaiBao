import {New} from "rc/app/models/news.model"
export interface New{
    loading: boolean,
    isSuccess:boolean,
    error:string,
    news:New[];
}
