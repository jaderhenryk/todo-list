import styles from './Header.module.css';

import todoListLogo from '../assets/todo-list-logo.svg';

export function Header() {
  return (
    <header className={styles.mainHeader}>
      <img src={todoListLogo} />
    </header>
  )
}