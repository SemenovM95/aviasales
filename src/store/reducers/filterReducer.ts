export type FilterType = 'all' | '0' | '1' | '2' | '3'

export interface FilterAction {
  type: 'SET_FILTER' | 'ADD_FILTER' | 'REMOVE_FILTER'
  payload: FilterType
}

export interface FilterState {
  filters: FilterType[]
}

export const initialState: FilterState = {
  filters: ['all', '0', '1', '2', '3'],
}

// eslint-disable-next-line default-param-last
const filterReducer = (state: FilterState = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'ADD_FILTER':
      if (action.payload === 'all') return { ...state, filters: ['all', '0', '1', '2', '3'] }
      if (state.filters.length + 1 === 4) return { ...state, filters: ['all', '0', '1', '2', '3'] }
      return { ...state, filters: [...state.filters, action.payload] }
    case 'REMOVE_FILTER':
      if (action.payload === 'all') return { ...state, filters: [] }
      return { ...state, filters: state.filters.filter((el) => el !== action.payload && el !== 'all') }
    default:
      return state
  }
}

export default filterReducer
