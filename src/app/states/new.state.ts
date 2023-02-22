import {New} from "rc/app/models/news.model"
export interface New{
    loading: boolean,
    loaded:boolean,
    error:boolean,
    news:New[]
}
