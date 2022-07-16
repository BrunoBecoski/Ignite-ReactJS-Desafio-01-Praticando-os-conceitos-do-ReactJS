import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <NewTask />
      </main>
    </div>
  );
}