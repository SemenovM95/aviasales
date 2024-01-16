import { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'

import Ticket from 'components/Ticket/Ticket.tsx'
import TicketTabs from 'components/TicketSortTabs/TicketSortTabs.tsx'
import TicketFilter from 'components/TicketFilter/TicketFilter.tsx'
import TicketActions from 'src/store/actions/ticketActions.ts'
import type { TicketType } from 'src/components/Ticket/Ticket.d'
import type { RootState } from 'src/store/store.ts'
import { FilterType } from 'src/store/reducers/filterReducer.ts'

import type { TicketListProps } from './TicketList.d'
import styles from './TicketList.module.scss'

function TicketList({
  ticketStore: { tickets, searchId, loading, errors },
  filterStore: { filters },
  sortStore: { sort },
  getSearchId,
  getTickets,
}: TicketListProps) {
  const [showSize, setShowSize] = useState(5)

  const ticketsToRender = useMemo(() => {
    let ticketsCopy = tickets.slice()
    if (!filters.includes('all')) {
      ticketsCopy = ticketsCopy.filter((ticket) => {
        return ticket.segments.every((segment) => {
          return filters.includes(segment.stops.length.toString() as FilterType)
        })
      })
    }
    ticketsCopy = ticketsCopy.sort((a, b) => {
      if (sort === 'fastest') {
        const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return aDuration - bDuration
      }
      return a.price - b.price
    })
    return ticketsCopy.slice(0, showSize)
  }, [tickets, showSize, filters, sort])

  const renderTickets = (data: TicketType[]) => {
    return data.map((ticket) => <Ticket key={ticket.price * Math.random()} ticket={ticket} />)
  }

  const renderNoResults = () => !loading && <div>Ничего не найдено</div>

  useEffect(() => {
    if (!searchId) getSearchId()
  }, [])

  useEffect(() => {
    if (loading && searchId) getTickets(searchId)
  }, [searchId, loading, tickets, errors])

  return (
    <section className={styles.ticketList}>
      <div className={styles.ticketList__colSm}>
        <TicketFilter />
      </div>
      <div className={styles.ticketList__col}>
        <TicketTabs />
        {loading && <div className={styles.ticketList__progress} />}
        <section className={styles.ticketList__tickets}>
          {ticketsToRender.length ? renderTickets(ticketsToRender) : renderNoResults()}
        </section>
        <button
          className={styles.ticketList__button}
          type="button"
          onPointerDown={() => setShowSize((curr) => curr + 5)}
        >
          Показать еще 5 билетов!
        </button>
      </div>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  ticketStore: state.ticket,
  filterStore: state.filter,
  sortStore: state.sort,
})

export default connect(mapStateToProps, TicketActions)(TicketList)
