import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';

import './global.css';

interface Task {
  checked: boolean,
  text: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(text: string) {
    const newTask = {
      checked: false,
      text
    }
  
    setTasks((state) => [...state, newTask]);
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <NewTask createTask={createTask} />
        <Tasks tasks={tasks} />
      </main>
    </div>
  );
}