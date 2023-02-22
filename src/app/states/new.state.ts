import {New} from "src/app/models/news.model"
export interface NewState{
    loading: boolean,
    isSuccess:boolean,
    error:string,
    news:New[];
}
