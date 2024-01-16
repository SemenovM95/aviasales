import { ChangeEvent } from 'react'
import { connect } from 'react-redux'

import filterActions from 'src/store/actions/filterActions.ts'
import type { RootState } from 'src/store/store.ts'
import type { FilterType } from 'src/store/reducers/filterReducer.ts'

import type { Filter, TicketFilterProps } from './TicketFilter.d'
import styles from './TicketFilter.module.scss'

function TicketFilter({ addFilter, removeFilter, filterStore: { filters } }: TicketFilterProps) {
  const defaultFilters: Filter[] = [
    { label: 'Все варианты', type: 'all' },
    { label: 'Без пересадок', type: '0' },
    { label: '1 пересадка', type: '1' },
    { label: '2 пересадки', type: '2' },
    { label: '3 пересадки', type: '3' },
  ]

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value as FilterType
    if (filters.includes(filter)) {
      removeFilter(filter)
    } else {
      addFilter(filter)
    }
  }

  return (
    <div className={styles.ticketFilter}>
      <p className={styles.ticketFilter__title}>Количество пересадок</p>
      {defaultFilters.map((filter) => (
        <label key={filter.type} className={styles.ticketFilter__label}>
          <input
            className={styles.ticketFilter__checkInput}
            type="checkbox"
            value={filter.type}
            onChange={handleFilterChange}
            checked={filters.includes(filter.type)}
          />
          <span className={styles.ticketFilter__checkBox} />
          {filter.label}
        </label>
      ))}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({ filterStore: state.filter })

export default connect(mapStateToProps, filterActions)(TicketFilter)
