import { SearchIdResponseData, GetTicketsResponseData } from 'src/store/reducers/ticketReducer.ts'

const baseUrl = 'https://aviasales-test-api.kata.academy'

const getSearchId = async (): Promise<SearchIdResponseData> => {
  return fetch(`${baseUrl}/search`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error(e)
    })
}
const getTickets = async (searchId: string): Promise<GetTicketsResponseData> => {
  return fetch(`${baseUrl}/tickets?searchId=${searchId}`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error(e)
    })
}

export default {
  getSearchId,
  getTickets,
}
