import { api, getCommonHeader } from "./util/axios"

export const getGameList = () =>
  api.get('/app/game', {
    headers: getCommonHeader()
  })

export interface postGameItem {
  name: string
}

export const addGameItem = (postData: postGameItem) => 
  api.post('/app/game', { ...postData }, {
    headers: getCommonHeader()
  })
