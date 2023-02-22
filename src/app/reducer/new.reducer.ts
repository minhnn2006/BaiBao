import {createReducer, on}


const initialState:NewState={
    news:[],
    loading: false,
    isSuccess:false,
    error:'',
}
export const newReducer = createReducer(
    initialState,
    on(NewActions.getNews,(state)=>{
        return(
            ...state,
            loading: true,
        );
    }),
    on(NewActions.getNewsSuccess,(state,{news})=>{
        return(
            ...state,
            loading: false,
            news:news
        );
    }),
    on(NewActions.getNewsSuccess,(state,{error})=>{
        return(
            ...state,
            loading: false,
            isSuccess:false,
            error:error,

        );
    }),

)
