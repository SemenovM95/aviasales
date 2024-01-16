import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import sortActions from 'src/store/actions/sortActions.ts'
import type { RootState } from 'src/store/store.ts'
import type { SortType } from 'src/store/reducers/sortReducer.ts'

import type { TabData, TicketTabsProps } from './TicketSortTabs.d'
import styles from './TicketSortTabs.module.scss'

function TicketSortTabs({ setSort }: TicketTabsProps) {
  const tabs: TabData[] = [
    { label: 'Самый дешевый', type: 'cheapest' },
    { label: 'Самый быстрый', type: 'fastest' },
    { label: 'Опти\u200Bмальный', type: 'optimal' },
  ]
  const [currentTab, setCurrentTab] = useState('fastest')

  useEffect(() => {
    setSort(currentTab as SortType)
  }, [currentTab, setSort])

  return (
    <div className={styles.ticketTabs}>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          className={`${styles.ticketTabs__button} ${tab.type === currentTab && styles.ticketTabs__buttonActive}`}
          onPointerDown={() => setCurrentTab(tab.type)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({ sortStore: state.sort })

export default connect(mapStateToProps, sortActions)(TicketSortTabs)
