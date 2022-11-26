import { api, getCommonHeader } from "./util/axios"

export const getFilmList = () =>
  api.get('/app/film', {
    headers: getCommonHeader()
  })

export interface postFilmItem {
  name: string
}

export const addFilmItem = (postData: postFilmItem) => 
  api.post('/app/film', { ...postData }, {
    headers: getCommonHeader()
  })
