import { api, getCommonHeader } from "./util/axios"

export const getFootballList = () =>
  api.get('/app/football', {
    headers: getCommonHeader()
  })

export interface postFootballItem {
  name: string
}

export const addFootballItem = (postData: postFootballItem) => 
  api.post('/app/football', { ...postData }, {
    headers: getCommonHeader()
  })
