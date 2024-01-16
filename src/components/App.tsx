import TicketList from 'components/TicketList/TicketList.tsx'
import Logo from 'components/Logo/Logo.tsx'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.page__logo}>
        <Logo />
      </div>
      <TicketList />
    </div>
  )
}

export default App
