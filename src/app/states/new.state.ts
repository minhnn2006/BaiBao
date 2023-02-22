import {New} from "rc/app/models/news.model"
export interface NewState{
    loading: boolean,
    isSuccess:boolean,
    error:string,
    news:New[];
}
