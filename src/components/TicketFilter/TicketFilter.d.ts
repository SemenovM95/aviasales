import { FilterType, FilterAction } from "src/store/reducers/filterReducer.ts"

export type Filter = {
  label: 'Все варианты' | 'Без пересадок' | '1 пересадка' | '2 пересадки' | '3 пересадки'
  type: FilterType
}

export interface TicketFilterProps {
  filterStore: { filters: FilterType[] }
  addFilter: (filter: FilterType) => void
  removeFilter: (filter: FilterType) => void
}