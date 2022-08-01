import styles from './Task.module.css';

import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { TaskEntity } from '../interfaces/TaskEntity.interface';

interface TaskProps {
  task: TaskEntity,
  onDeleteTask: (id: string) => void
  onMarkDone: (id: string) => void
}

export function Task({ task, onDeleteTask, onMarkDone }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }
  function handleMarkDone() {
    onMarkDone(task.id);
  }
  
  return (
    <div className={styles.task}>
      <button type="button" className={styles.checkButton} onClick={handleMarkDone}>
        {task.done ? <CheckCircle className={styles.marked} size={24} weight="fill" /> : <Circle className={styles.notMarked} size={24} />}
      </button>
      <span className={task.done ? styles.taskDone : ''}>{task.description}</span>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}