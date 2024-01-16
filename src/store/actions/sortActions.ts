import type { Dispatch } from 'redux'

import type { SortType } from 'src/store/reducers/sortReducer'

const setSort = (payload: SortType) => (dispatch: Dispatch) => dispatch({ type: 'SET_SORT', payload })

export default { setSort }
