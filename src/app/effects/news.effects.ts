import { Actions, createEffect, ofType } from "@ngrx/effects"
import { switchMap, map, catchError, of } from "rxjs"
import { NewActions } from "../actions/new.action"
import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable()
  export class New{
  apiURL="https://social.runwayclub.dev/api/articles/latest?page=1&per_page=3"
  constructor(private actions: Actions, private http: HttpClient){

  }
  getNews$=createEffect(()=>{
    return this.actions.pipe(
        ofType(NewActions.getNews),
        switchMap((actions)=> {
            return this.http.get(this.apiURL)
        }),
        map((response:any)=>{
            return NewActions.getNewsSuccess({news:<Array<New>>response })
        }),
        catchError((error)=>{
            return of(NewActions.getNewsFailure({error:error}))
        })
    )
  })
}
