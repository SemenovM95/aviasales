import type { TicketState } from 'src/store/reducers/ticketReducer.ts'
import type { SortState } from "src/store/reducers/sortReducer.ts"
import type { FilterState } from "src/store/reducers/filterReducer.ts"

interface TicketListProps {
  ticketStore: TicketState
  filterStore: FilterState
  sortStore: SortState
  getTickets: (searchId: string) => void
  getSearchId: () => void
}

export { TicketListProps }