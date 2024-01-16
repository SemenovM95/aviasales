import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import ticketReducer, {
  TicketState,
  TicketAction,
  initialState as ticketInitialState,
} from './reducers/ticketReducer.ts'
import sortReducer, { SortState, SortAction, initialState as sortInitialState } from './reducers/sortReducer.ts'
import filterReducer, {
  FilterState,
  FilterAction,
  initialState as filterInitialState,
} from './reducers/filterReducer.ts'

export interface RootState {
  ticket: TicketState
  sort: SortState
  filter: FilterState
}

type StateActions = TicketAction | SortAction | FilterAction

const rootReducer: Reducer<RootState, StateActions> = combineReducers({
  ticket: ticketReducer as Partial<RootState>,
  sort: sortReducer,
  filter: filterReducer,
})

const initialState: RootState = {
  ticket: ticketReducer(ticketInitialState, {} as TicketAction),
  sort: sortReducer(sortInitialState, {} as SortAction),
  filter: filterReducer(filterInitialState, {} as FilterAction),
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
export default store
