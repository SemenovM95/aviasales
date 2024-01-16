import type { Dispatch } from 'redux'

import type { GetTicketsResponseData, SearchIdResponseData } from 'src/store/reducers/ticketReducer.ts'
import AVSService from 'src/services/AVSService.ts'

const getTickets = (searchId: string) => async (dispatch: Dispatch) => {
  AVSService.getTickets(searchId)
    .then((res: GetTicketsResponseData) => {
      dispatch({
        type: 'ADD_TICKETS',
        payload: res.tickets,
      })
      return res
    })
    .then((data: GetTicketsResponseData) => {
      if (data.stop) dispatch({ type: 'SET_LOADING', payload: false })
    })
    .catch((error) =>
      dispatch({
        type: 'SET_ERROR',
        payload: error,
      })
    )
}

const getSearchId = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  AVSService.getSearchId()
    .then((data: SearchIdResponseData) => {
      dispatch({
        type: 'SET_SEARCH_ID',
        payload: data.searchId,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'SET_ERROR',
        payload: error,
      })
    })
}

export default { getTickets, getSearchId }
