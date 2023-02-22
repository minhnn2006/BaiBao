import {Injectable}
import {Actions}

@Injectable()
  export class New{
  apiURL="https://social.runwayclub.dev/api/articles/latest?page=1&per_page=3"
  constructor(private actions: Actions, private http: HttpCilent){

  }
  getNews$=createEffect(()=>{
    return this.actions.pipe(
        ofType(NewActions.getNews)
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
