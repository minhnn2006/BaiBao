import { NewActions } from "../actions/new.action";
import { NewState } from "../states/new.state";
import {createReducer, on} from '@ngrx/store'


const initialState:NewState={
    news:[],
    loading: false,
    isSuccess:false,
    error:'',
}
export const newReducer = createReducer(
    initialState,
    on(NewActions.getNews,(state)=>{
        return{
            ...state,
            loading: true,
    };
    }),
    on(NewActions.getNewsSuccess,(state,{news})=>{
        return{
            ...state,
            loading: false,
            news:news
        };
    }),
    on(NewActions.getNewsFailure,(state,{error})=>{
        return{
            ...state,
            loading: false,
            isSuccess:false,
            error:error,
        };
    }),

)
