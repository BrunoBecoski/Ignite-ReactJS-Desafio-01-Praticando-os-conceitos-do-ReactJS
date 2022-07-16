import styles from './NewTask.module.css';

import plusIcon from '../assets/plus.svg';

export function NewTask() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Adicione uma nova tarefa" />
      <button className={styles.button}>
        Criar
        <img src={plusIcon} alt="Mais" />
      </button>
    </div>
  );
}