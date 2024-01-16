export type SortType = 'fastest' | 'cheapest' | 'optimal'

export interface SortAction {
  type: 'SET_SORT'
  payload: SortType
}

export interface SortState {
  sort: SortType
}

export const initialState: SortState = {
  sort: 'fastest',
}

// eslint-disable-next-line default-param-last
const sortReducer = (state: SortState = initialState, action: SortAction): SortState => {
  switch (action.type) {
  case 'SET_SORT':
    if (action.payload === 'optimal') return state
    return { ...state, sort: action.payload }
  default:
    return state
  }
}

export default sortReducer
