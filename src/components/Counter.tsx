import styles from './Counter.module.css';

import { TaskEntity } from "../interfaces/TaskEntity.interface";

interface CounterProps {
  tasks: TaskEntity[]
}

export function Counter( {tasks }: CounterProps) {
  const tasksDone = tasks.reduce( (count, task) => {
    return task.done ? count += 1 : count;
  }, 0);
  return (
    <section className={styles.todoListInfo}>
      <span className={styles.created}>Tarefas Criadas <strong>{tasks.length}</strong></span>
      <span className={styles.done}>Concluídas <strong>{tasksDone}</strong></span>
    </section>
  )
}