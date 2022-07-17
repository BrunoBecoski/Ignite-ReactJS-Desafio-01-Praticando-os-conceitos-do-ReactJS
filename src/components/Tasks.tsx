import { Task } from './Task';

import  styles from './Tasks.module.css';

interface TasksProps {
  tasks: {
    checked: boolean;
    text: string;
  }[]
}

export function Tasks({ tasks }: TasksProps) {
  const createdTasks = tasks.length; 

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{createdTasks}</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>2 de {createdTasks}</span>
        </div>
      </div>

      { createdTasks
        ? 
          tasks.map(task => (
            <Task key={task.text} task={task} />
          ))
        :
          <div className={styles.empty}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
      }
    </div>
  );
}