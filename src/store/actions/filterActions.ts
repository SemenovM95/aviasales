import type { Dispatch } from 'redux'

import type { FilterType } from 'src/store/reducers/filterReducer'

const addFilter = (payload: FilterType) => (dispatch: Dispatch) => dispatch({ type: 'ADD_FILTER', payload })
const removeFilter = (payload: FilterType) => (dispatch: Dispatch) => dispatch({ type: 'REMOVE_FILTER', payload })

export default { addFilter, removeFilter }
