import styles from './EmptyList.module.css';

import emptyListImg from '../assets/todo-list-empty.svg';

export function EmptyList() {
  return (
    <div className={styles.todoListEmpty}>
      <img src={emptyListImg} alt="Lista de tarefas vazia." />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}