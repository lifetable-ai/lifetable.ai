import { api, getCommonHeader } from "./util/axios"

export const getOscList = () =>
  api.get('/app/osc', {
    headers: getCommonHeader()
  })

export interface postOscItem {
  name: string
}

export const addOscItem = (postData: postOscItem) => 
  api.post('/app/osc', { ...postData }, {
    headers: getCommonHeader()
  })
