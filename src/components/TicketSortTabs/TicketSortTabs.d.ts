import type { SortType } from 'src/store/reducers/sortReducer'

export interface TicketTabsProps {
  setSort: (payload: SortType) => void
}

export interface TabData {
  label: string
  type: SortType
}