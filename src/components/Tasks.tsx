import  styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </div>

      <div className={styles.empty}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}