
import New from 'src/app/models/news.models'

export const NewActions={
  getNews:createAction('[New] get all new'),
getNewsSuccess:createAction('[New] get all new success', props<{news:Array<any>}>()),
  getNewsFailure:createAction('[New] get all new success',props<{error:string}>()),
}
