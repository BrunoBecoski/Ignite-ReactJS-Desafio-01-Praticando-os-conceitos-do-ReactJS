import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';

import './global.css';

interface Task {
  id: string;
  checked: boolean,
  text: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(text: string) {
    const newTask = {
      id: Date.now().toString(),
      checked: false,
      text
    }
  
    setTasks((state) => [...state, newTask]);
  }

  function checkedTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          text: task.text
        }
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <NewTask createTask={createTask} />
        <Tasks tasks={tasks} checkedTask={checkedTask} deleteTask={deleteTask}/>
      </main>
    </div>
  );
}