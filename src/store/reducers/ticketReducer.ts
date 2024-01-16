import { Reducer } from 'redux'

import type { TicketType } from 'src/components/Ticket/Ticket.d'

export type TicketActionType = 'ADD_TICKETS' | 'LOAD_TICKETS' | 'SET_SEARCH_ID' | 'SET_ERROR' | 'SET_LOADING'

export type SearchIdResponseData = {
  searchId: string
}

export type GetTicketsResponseData = {
  tickets: TicketType[]
  stop: boolean
}

export interface TicketAction {
  type: TicketActionType
  payload: TicketType[] | string | boolean
}

export interface TicketState {
  tickets: TicketType[]
  searchId: string | null
  loading: boolean
  errors: any[]
}

export const initialState: TicketState = {
  tickets: [],
  searchId: null,
  loading: false,
  errors: [],
}

const ticketReducer: Reducer<TicketState, TicketAction> = (
  // eslint-disable-next-line default-param-last
  state: TicketState = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case 'SET_SEARCH_ID': {
      return { ...state, searchId: action.payload as string }
    }
    case 'ADD_TICKETS': {
      return { ...state, tickets: [...state.tickets, ...(action.payload as TicketType[])] }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload as boolean }
    }
    case 'SET_ERROR': {
      return { ...state, errors: [...state.errors, action.payload] }
    }
    default:
      return state
  }
}

export default ticketReducer
