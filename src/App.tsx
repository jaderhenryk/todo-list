import './global.css'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { v4 as uuidv4} from 'uuid';

import { Header } from './components/Header';
import { EmptyList } from './components/EmptyList';
import { Counter } from './components/Counter';
import { Task } from './components/Task';

import { PlusCircle } from 'phosphor-react';

import { TaskEntity } from './interfaces/TaskEntity.interface';

export function App() {
  const [tasks, setTasks] = useState(Array<TaskEntity>());
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Informe a descrição da tarefa.');
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskDescription(event.target.value);
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: newTaskDescription,
      done: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskDescription('');
  }
  function deleteTask(id: string) {
    const deletedTask = tasks.filter( task => {
      return task.id !== id;
    });
    setTasks(deletedTask);
  }
  function taskDone(id: string) {
    setTasks(tasks.map(task => task.id === id ? {...task, done: !task.done} : task));
  }
  const [newTaskDescription, setNewTaskDescription] = useState('');
  return (
    <div>
      <Header/>
      <main className="todo-list">
        <header className="todo-list-header">
        <form onSubmit={handleCreateNewTask} className="todo-list-form">
          <input 
            type="text"
            name="description"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            value={newTaskDescription}
            required
          />
          <button type="submit" className="btn-primary">
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>
        </header>
        <Counter 
          tasks={tasks}
        />
        <section>
          {
            tasks.length == 0
            ?
            <EmptyList/>
            :
            <div className="task-list">
              {
                tasks.map( task => {
                  return (
                    <Task 
                      key={task.id} 
                      task={task}
                      onDeleteTask={deleteTask}
                      onMarkDone={taskDone}
                    />
                  )
                })
              }
            </div>
          }
        </section>
      </main>
    </div>
  )
}
